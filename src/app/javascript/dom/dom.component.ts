import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'dom.component.html',
})
export class DomComponent implements OnInit {
  category_id = 12;
  answerList;

  pageUrl = "http://www.javabrain.com/javascript/dom";
  pageIdentifier = "javascript.dom";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
