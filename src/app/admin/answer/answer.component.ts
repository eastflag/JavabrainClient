import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {AnswerVO} from "../../domain/answer.vo";

@Component({
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit{
  category_id: number;
  answerVO: AnswerVO;
  answerList;

  constructor(private adminService: AdminService) {
    this.category_id = 4;
    this.answerVO = new AnswerVO();
    this.answerVO.category_id = 4;
  }

  ngOnInit(): void {
    this.getAnswerList();
  }

  getAnswerList() {
    this.adminService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
        console.log(this.answerList);
      })
  }

  submit(answerForm) {
    this.answerVO.seq = this.answerList.length + 1;
    this.adminService.addAnswer(this.answerVO)
      .then(result => {
        this.getAnswerList();
      })
  }
}
