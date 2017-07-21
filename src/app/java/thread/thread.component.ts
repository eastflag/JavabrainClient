import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'thread.component.html',
})
export class ThreadComponent implements OnInit {
  category_id = 7;
  answerList;

  pageUrl = "http://www.javabrain.com/java/thread";
  pageIdentifier = "java.thread";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
