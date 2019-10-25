import {Component,OnInit} from '@angular/core';

/**
 * @title Paginator
 */
@Component({
  selector: 'paginator-overview-example',
  templateUrl: 'paginator-overview-example.html',
  styleUrls: ['paginator-overview-example.css'],
})
export class PaginatorOverviewExample implements OnInit {
  data=[];
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('prdcts'))
    console.log(this.data)
  }
  displayedColumns: string[] = ['fname', 'prc'];
}




/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */