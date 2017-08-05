import {Component, OnInit} from "@angular/core";
import {SnsdicVO} from "../domain/snsdic.vo";
import {environment} from "../../environments/environment";

@Component({
  templateUrl: 'snsdic.component.html',
  styles: ['snsdic.component.scss']
})
export class SnsdicComponent implements OnInit {
  clientId: string;
  websocket: WebSocket;
  message = null;

  constructor() {

  }

  ngOnInit(): void {
    this.websocket = new WebSocket(environment.WebSocket);

    this.websocket.onopen = (event) => {
      console.log(event);
    };

    this.websocket.onclose = (event) => {
      console.log(event);
    };

    this.websocket.onerror = (event) => {
      console.log(event);
    };

    this.websocket.onmessage = (event) => {
      // evnet.data에 수신 객체 저장
      console.log(event);
    }

  }

  sendMessage(command: string, message: string) {
    let snsdic = new SnsdicVO();
    snsdic.clientId = this.clientId;
    snsdic.type = "C";
    snsdic.command = command;
    snsdic.message = message;
    this.websocket.send(snsdic);
  }

  send() {
    this.sendMessage("send", this.message);
  }
}
