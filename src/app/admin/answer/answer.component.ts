import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {AnswerVO} from "../../domain/answer.vo";

@Component({
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit{
  nodes;
  category_id: number;
  answerVO: AnswerVO;
  answerList;

  constructor(private adminService: AdminService) {
    this.answerVO = new AnswerVO();
  }

  ngOnInit(): void {
    this.getCategoryTree();
  }

  getCategoryTree() {
    this.adminService.getCategoryTree(0)
      .then(value => {
        this.nodes = value;
      })
  }

  getAnswerList() {
    this.adminService.getAnswerList(this.category_id)
      .then(value => {
        this.answerList = value;
      })
  }

  submit(answerForm) {
    this.answerVO.category_id = this.category_id;
    this.adminService.addAnswer(this.answerVO)
      .then(result => {
        this.getAnswerList();
        // 입력폼 초기화
        this.answerVO = new AnswerVO();
      })
  }

  modifyAnswer(answer: AnswerVO) {
    this.adminService.modifyAnswer(answer)
      .then(result => {
        this.getAnswerList();
      });
  }

  onEvent(event) {
    // event.node.data.category_id
    console.log(event);
    console.log(event.node.data.category_id);
    this.category_id = event.node.data.category_id;
    this.getAnswerList();
  }
}
