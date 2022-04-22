import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  technologyList: string[] = ["Angular", "ReactJS", "VueJS", "Other technology"];
  years: string[] = ["No exp", "Less than 1 year", "1-3 years", "3-5 years", "More than 5 years"]

  constructor() { }

  ngOnInit(): void {
  }
submit() {}
}
