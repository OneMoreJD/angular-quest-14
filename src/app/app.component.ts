import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questAngular14';

  user : User;

  username = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.email, Validators.required]);
  pwd = new FormControl('', [Validators.required, Validators.minLength(8)]);
  street = new FormControl('');
  zipCode = new FormControl('', [ Validators.maxLength(5), Validators.minLength(5)]);
  city = new FormControl('');

  onSubmit() {
    const address = {
      street: this.street.value,
      zipCode: this.zipCode.value,
      city: this.city.value
    };

    this.user = new User(
      this.username.value,
      this.email.value,
      this.pwd.value,
      address);
  }
}
