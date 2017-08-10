import {Component, ElementRef, ViewChild} from '@angular/core';
import {MessageVO} from "./domain/message.vo";
import {Paho} from "ng2-mqtt/mqttws31";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: MessageVO = null; // 보낼 데이터 객체
  client;
  inputMessage;
  receiveMsgList: MessageVO[] = []; // 수신된 메시지들
  displayChat = false;

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor() {
    this.message = new MessageVO();
    this.message.clientID = new Date().getTime().toString();
    this.message.nickname = "익명";
    this.client = new Paho.MQTT.Client('www.javabrain.kr', 8083, this.message.clientID);

    this.onMessage();
    this.onConnectionLost();
    this.client.connect({onSuccess: this.onConnected.bind(this)});
  }

  onConnected() {
    console.log("Connected");
    this.client.subscribe("javabrain");
    this.sendMessage('connect', this.message.nickname +  '님 접속');
  }

  sendMessage(protocol: string, message: string) {
    this.message.protocol = protocol;
    this.message.message = message;
    let sendMessage = JSON.stringify(this.message);
    let packet = new Paho.MQTT.Message(sendMessage);
    packet.destinationName = "javabrain"; // 보낼 topic
    this.client.send(packet);
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Message arrived : ' + message.payloadString);
      let receiveMessage: MessageVO = JSON.parse(message.payloadString);
      this.receiveMsgList.push(receiveMessage);
      setTimeout(() => this.scrollToBottom(), 200);
    };
  }

  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }

  send() {
    console.log('sending ' + this.inputMessage);
    this.sendMessage('broadcast', this.inputMessage);
  }

  getCurrentDate() {
    return new Date();
  }

  scrollToBottom(): void {
    // try {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    // } catch(err) { }
  }
}
