import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentCanDeactivate} from '../../guards/away.guard';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, ComponentCanDeactivate {

  canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    return confirm('Are you sure you want to navigate?');
  }


  private firstQueryParam;
  private secondQueryParam;
  private authStatus: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {


    this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.firstQueryParam = queryParams['customQuery'];
      this.secondQueryParam = queryParams['secondQueryParam'];
    });

  }

  ngOnInit() {
    if ((this.firstQueryParam && this.secondQueryParam) != null)
      alert('First query param: ' + this.firstQueryParam + '\n' + 'Second query param: ' + this.secondQueryParam);
  }

  onNavigate() {
    this.router.navigate(['']);
  }


}
