import {Component, Input, OnInit} from '@angular/core';
import {AnswerVO} from "../../domain/answer.vo";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'answer-view',
  templateUrl: './answer.view.component.html',
  styleUrls: ['./answer.view.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AnswerViewComponent {
  @Input()
  answer: AnswerVO;

  constructor() {

  }
}
