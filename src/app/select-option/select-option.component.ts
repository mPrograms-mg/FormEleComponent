import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Option {
  value: any;
  label: string;
}

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit {
  @Input() control: FormControl;
  @Input() options: Option[];
  @Input() label: string;
  constructor() {}

  ngOnInit() {}
}
