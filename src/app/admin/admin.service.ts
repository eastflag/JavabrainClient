import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import {ResultVO} from "../domain/result.vo";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminService {
  private SERVER: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  getAnswerList(category_id: number): Promise<any> {
    return this.http.get(this.SERVER + '/admin/api/answer?category_id=' + category_id)
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  addAnswer(params: any): Promise<any> {
    return this.http.post(this.SERVER + '/admin/api/answer', JSON.stringify(params), {headers: this.headers})
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  modifyAnswer(params: any): Promise<ResultVO> {
    return this.http.put(this.SERVER + '/admin/api/answer', JSON.stringify(params), {headers: this.headers})
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  removeAnswer(answer_id: number): Promise<ResultVO> {
    return this.http.delete(this.SERVER + '/admin/api/answer?answer_id=' + answer_id)
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  getCategoryTree(parent_id: number): Promise<any> {
    return this.http.get(this.SERVER + '/api/categoryTree?parent_id=' + parent_id)
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.log('handleError--------------------');
    // console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
