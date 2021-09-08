import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  clientData: string = '';
  serverData: string = '';
  constructor() {}
  getDataFromClient(value: string) {
    this.clientData = value;
  }
  getDataFromServer(value1: string) {
    this.serverData = value1;
  }

  ngOnInit(): void {}
}
