import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  formSubmitted: boolean = false;
  showLoginBox: boolean = true; 

  toggleForm() {
    this.showLoginBox = !this.showLoginBox;
  }

  onInput(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (field === 'email') {
      this.email = value;
    } else if (field === 'password') {
      this.password = value;
    } 
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    this.formSubmitted = true;
    if (this.email && this.password ) {
      // Handle login or registration logic here
      console.log('Form Submitted', { email: this.email, password: this.password });
      // You can hide the login box or navigate to another page here
      this.showLoginBox = false; // Example action after successful submission
    }
  }
}
