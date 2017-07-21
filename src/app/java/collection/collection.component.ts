import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'collection.component.html',
})
export class CollectionComponent implements OnInit {
  category_id = 5;
  answerList;

  pageUrl = "http://www.javabrain.com/java/collection";
  pageIdentifier = "java.collection";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
