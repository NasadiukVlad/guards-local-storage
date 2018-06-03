import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  orderId: number;

  constructor(private router: Router) {
  }

 /* navigateToOrder() {
    this.router.navigate(['order-data', this.orderId]);
  }

  navigateToAbout() {
    this.router.navigate(['about'], {queryParams: {'customQuery': 6456, 'secondQueryParam': 200}});
  }
*/

}


