import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  contributions: object[];

  ngOnInit(): void {
    // todo: getting data from API or some data source

    this.contributions = [
      {
        'id': 1,
        'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend, nibh et congue mollis, ex orci venenatis libero, id fringilla ex lorem vel turpis. In ac magna ac mauris pharetra sodales quis et lectus. Phasellus tincidunt luctus congue.',
        'progress': 33,
        'targetDate': '1/5/1986',
        'creationDate': '5/2/2018',
        'status': 'active',
        'visibility': 'all',
        'position': 'manager',
      },
      {
        'id': 2,
        'title': 'I have no target data. I should not be desplayed',
        'progress': 22,
        'creationDate': '5/2/2018',
        'status': 'active',
      },
      {
        'id': 3,
        'title': 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
        'progress': 74,
        'creationDate': '25/12/1916',
        'targetDate': '25/12/2016',
        'status': 'review',
      },
      {
        'id': 4,
        'title': 'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        'description': 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        'progress': 99,
        'creationDate': '1/09/2016',
        'targetDate': '13/11/2016',
        'status': 'review',
        'visibility': 'all',
      },
    ];


  }
}
