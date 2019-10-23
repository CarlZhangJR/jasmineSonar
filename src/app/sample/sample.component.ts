import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
bindingTest: string;
  constructor() {
  }

  ngOnInit() {
    this.bindingTest = 'this is a sample of binding test';
  }

  testSum(num1: number, num2: number) {
    return num1 + num2;

  }

  unTestFunction(){
    return true;
  }
}