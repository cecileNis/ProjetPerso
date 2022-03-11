import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = '';

  constructor() {
  }

  ngOnInit() {
    this.title = "The imaginary world of Disney Plush";
  }

}


