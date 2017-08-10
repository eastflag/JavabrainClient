import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'promise.component.html',
})
export class PromiseComponent implements OnInit {
  category_id = 15;
  answerList;

  pageUrl = "http://www.javabrain.com/javascript/promise";
  pageIdentifier = "javascript.promise";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
