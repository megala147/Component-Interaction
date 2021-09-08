import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  @Input() serverRef: string = '';
  @Output() clientEvent = new EventEmitter();
  constructor() {}
  getData(value: string): any {
    this.clientEvent.emit(value);
  }

  ngOnInit(): void {}
}
