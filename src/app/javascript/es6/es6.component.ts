import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'es6.component.html',
})
export class Es6Component implements OnInit {
  category_id = 13;
  answerList;

  pageUrl = "http://www.javabrain.com/javascript/es6";
  pageIdentifier = "javascript.es6";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
