import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'generic.component.html',
})
export class GenericComponent implements OnInit {
  category_id = 6;
  answerList;

  pageUrl = "http://www.javabrain.com/java/generic";
  pageIdentifier = "java.generic";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
