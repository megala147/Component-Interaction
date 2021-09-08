import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  @Input() clientRef: string = '';
  @Output() serverEvent = new EventEmitter();
  constructor() {}
  getData(value: string): any {
    this.serverEvent.emit(value);
  }

  ngOnInit(): void {}
}
