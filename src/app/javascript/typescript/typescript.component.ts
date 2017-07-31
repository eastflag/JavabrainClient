import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'typescript.component.html',
})
export class TypescriptComponent implements OnInit {
  category_id = 14;
  answerList;

  pageUrl = "http://www.javabrain.com/javascript/typescript";
  pageIdentifier = "javascript.typescript";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
