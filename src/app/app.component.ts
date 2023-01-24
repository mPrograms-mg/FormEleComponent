import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FormElementCom';

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),
    radio: new FormControl(''),
    checkbox: new FormControl(false),
    select: new FormControl(''),
  });

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  Submit() {
    console.log(this.form.value);
  }

  data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { name: 'Bob Johnson', age: 35, city: 'Chicago' },
  ];
  columns = ['name', 'age', 'city'];
}
