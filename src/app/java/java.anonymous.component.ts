import {Component} from "@angular/core";

@Component({
  templateUrl: 'java.anonymous.component.html',
})
export class JavaAnonymousComponent {
  cssCode: string;

  constructor() {
    this.cssCode = `package com.eastflag.anonymous;

import com.eastflag.listener.ClickListener;

public class q4 {

	public static void main(String[] args) {
		/*
		 * 람다식으로 인스턴스 생성후
		 * onClick() 호출하여 "clicked" 출력
		 */
	}

}`;

  }
}
