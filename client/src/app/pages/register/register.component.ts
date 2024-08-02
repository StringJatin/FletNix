import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  age : string = '';
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
    else if(field==='age'){
      this.age = value;
    }
  }

  onLoginClick=()=>{
    this.router.navigate(['/login']);
  }


  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    this.formSubmitted = true;
    if (this.email && this.password) {
      this.loading = true;
      // Define the request body
      const body = {
        email: this.email,
        password: this.password,
        age : this.age
      };

      // Make the POST request with Axios
      axios.post('https://flet-nix-backend.vercel.app/api/auth/register', body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('Response:', response.data);
          alert("Registration Successfull!");
          this.router.navigate(['/login']);
          // Handle response here (e.g., save token, navigate to another page, etc.)
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error here (e.g., show error message to user)
        })
        .finally(()=>{
          this.loading = false;
        })

      // Example action after successful submission
      this.showLoginBox = false;
    }
  }
}
