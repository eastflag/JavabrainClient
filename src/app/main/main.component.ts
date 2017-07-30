import {Component} from '@angular/core';
import {Paho} from "ng2-mqtt/mqttws31";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  msg = null;
  client;

  constructor() {
    this.client = new Paho.MQTT.Client('www.javabrain.kr', 8083, 'eastflag');

    this.onMessage();
    this.onConnectionLost();
    this.client.connect({onSuccess: this.onConnected.bind(this)});
  }

  onConnected() {
    console.log("Connected");
    this.client.subscribe("test");
    this.sendMessage('HelloWorld');
  }

  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "test"; // 보낼 topic
    this.client.send(packet);
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Message arrived : ' + message.payloadString);
    };
  }

  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }

  send() {
    console.log('sending ' + this.msg);
    this.sendMessage(this.msg);
  }
}
