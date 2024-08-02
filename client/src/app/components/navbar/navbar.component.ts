import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  handleLogout = ()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
}
