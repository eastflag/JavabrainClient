import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'object.component.html',
})
export class ObjectComponent implements OnInit {
  category_id = 10;
  answerList;

  pageUrl = "http://www.javabrain.com/javascript/object";
  pageIdentifier = "javascript.object";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
