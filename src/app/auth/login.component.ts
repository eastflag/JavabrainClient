import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  naverUrl: string;

  constructor(private appService: AppService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // naver login url 얻기
    this.appService.getSocial("naver")
      .then((value) => {
        this.naverUrl = value.url;
      });

    // 로그인 결과의 토큰이 오는지 체크
    this.route.queryParams
      .subscribe(params => {
        if (params['token']) {
          console.log('login success:' + params['token']);
        }
      });
  }

}
