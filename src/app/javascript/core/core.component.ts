import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'core.component.html',
})
export class CoreComponent implements OnInit {
  category_id = 11;
  answerList;

  pageUrl = "http://www.javabrain.com/javascript/core";
  pageIdentifier = "javascript.core";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
