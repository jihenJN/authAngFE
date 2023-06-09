import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { mergeMap } from 'rxjs/operators';
import { ActivateService } from 'src/app/services/activate.service';


@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})

export class ActivateComponent implements OnInit {
  error = false;
  success = false;

  constructor(private activateService: ActivateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.queryParams.pipe(mergeMap(params => this.activateService.get(params.key))).subscribe({
    //   next: () => (this.success = true),
    //   error: () => (this.error = true),
    // });
  }
}
