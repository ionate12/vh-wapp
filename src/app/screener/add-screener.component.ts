import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-screener',
  templateUrl: './add-screener.component.html',
  styleUrls: ['./add-screener.component.scss']
})
export class AddScreenerComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
