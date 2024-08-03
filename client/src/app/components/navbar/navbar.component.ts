import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}
  handleLogout = ()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }

  homeButtonClick(){
    this.router.navigate(['/home']);
  }
}
