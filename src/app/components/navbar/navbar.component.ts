import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./navbar.component.html",
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}