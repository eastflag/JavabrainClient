import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {AnswerVO} from "../../domain/answer.vo";

@Component({
  selector: 'answer-view',
  templateUrl: './answer.view.component.html',
  styleUrls: ['./answer.view.component.scss']
})
export class AnswerViewComponent {
  @Input()
  answer: AnswerVO;

  constructor() {

  }
}
