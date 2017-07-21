import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'anonymous.component.html',
})
export class AnonymousComponent implements OnInit {
  category_id = 4;
  answerList;

  pageUrl = "http://www.javabrain.com/java/anonymous";
  pageIdentifier = "java.anonymous";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(4)
      .then(value => {
        this.answerList = value;
      })
  }
}
