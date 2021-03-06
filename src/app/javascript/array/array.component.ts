import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'array.component.html',
})
export class ArrayComponent implements OnInit {
  category_id = 9;
  answerList;

  pageUrl = "http://www.javabrain.com/javascript/array";
  pageIdentifier = "javascript.array";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
