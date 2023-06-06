import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ITEMS_PER_PAGE } from "src/app/config/pagination.constants";
import { Account } from "src/app/models/account";
import { User } from "src/app/models/user-management";
import { AccountService } from "src/app/services/account.service";
import { UserManagementService } from "src/app/services/user-management.service";
import { DeleteComponent } from "../delete/delete.component";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { ASC, DESC, SORT } from "src/app/config/navigation.constants";
import { combineLatest } from "rxjs";

  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
  })

  export class UserManagementComponent implements OnInit {
    currentAccount: Account | null = null;
    users: User[] | null = null;
    isLoading = false;
    totalItems = 0;
    itemsPerPage = ITEMS_PER_PAGE;
    page!: number;
    predicate!: string;
    ascending!: boolean;
  
    constructor(
      private userService: UserManagementService,
      private accountService: AccountService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private modalService: NgbModal
    ) {}
  
    ngOnInit(): void {
      this.accountService.identity().subscribe(account => (this.currentAccount = account));
      this.handleNavigation();
    }
  
    setActive(user: User, isActivated: boolean): void {
      this.userService.update({ ...user, activated: isActivated }).subscribe(() => this.loadAll());
    }
  
    trackIdentity(_index: number, item: User): string {
      return item.id!;
    }
  
    deleteUser(user: User): void {
      const modalRef = this.modalService.open(DeleteComponent, { size: 'lg', backdrop: 'static' });
      modalRef.componentInstance.user = user;
      // unsubscribe not needed because closed completes on modal close
      modalRef.closed.subscribe(reason => {
        if (reason === 'deleted') {
          this.loadAll();
        }
      });
    }
  
    loadAll(): void {
      this.isLoading = true;
      this.userService
        .query({
          page: this.page - 1,
          size: this.itemsPerPage,
          sort: this.sort(),
        })
        .subscribe({
          next: (res: HttpResponse<User[]>) => {
            this.isLoading = false;
            this.onSuccess(res.body, res.headers);
          },
          error: () => (this.isLoading = false),
        });
    }
  
    transition(): void {
      this.router.navigate(['./'], {
        relativeTo: this.activatedRoute.parent,
        queryParams: {
          page: this.page,
          sort: `${this.predicate},${this.ascending ? ASC : DESC}`,
        },
      });
    }
  
    private handleNavigation(): void {
      combineLatest([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
        const page = params.get('page');
        this.page = +(page ?? 1);
        const sort = (params.get(SORT) ?? data['defaultSort']).split(',');
        this.predicate = sort[0];
        this.ascending = sort[1] === ASC;
        this.loadAll();
      });
    }
  
    private sort(): string[] {
      const result = [`${this.predicate},${this.ascending ? ASC : DESC}`];
      if (this.predicate !== 'id') {
        result.push('id');
      }
      return result;
    }
  
    private onSuccess(users: User[] | null, headers: HttpHeaders): void {
      this.totalItems = Number(headers.get('X-Total-Count'));
      this.users = users;
    }
  }