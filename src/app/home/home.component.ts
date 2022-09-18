import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isNavOpen!: boolean;
  isSubNavClose = false;
  isSubnav = true;


  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.isNavOpen = !this.isNavOpen
  }

  openSubnav(){
    this.isSubNavClose = !this.isSubNavClose
    this.isSubnav = false

  }

}
