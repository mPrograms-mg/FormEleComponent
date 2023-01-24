import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent implements OnInit {
  @Input() control: FormControl;
  @Input() value: any;
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}
