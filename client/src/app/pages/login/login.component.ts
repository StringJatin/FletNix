import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

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
  loading : boolean = false;

  constructor(private router: Router) { }

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

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    this.formSubmitted = true;
    if (this.email && this.password) {
      this.loading = true;
      // Define the request body
      const body = {
        email: this.email,
        password: this.password
      };

      // Make the POST request with Axios
      axios.post('https://flet-nix-backend.vercel.app/api/auth/login', body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('Response:', response.data);
          localStorage.setItem('token',response.data?.token);
          this.router.navigate(['/home']);
          // Handle response here (e.g., save token, navigate to another page, etc.)
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error here (e.g., show error message to user)
        })
        .finally(()=>{
          this.loading  = false;
        })

      // Example action after successful submission
      this.showLoginBox = false;
    }
  }
}
