import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  templateUrl: 'stream.component.html',
})
export class StreamComponent implements OnInit {
  category_id = 8;
  answerList;

  pageUrl = "http://www.javabrain.com/java/stream";
  pageIdentifier = "java.stream";

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }
}
