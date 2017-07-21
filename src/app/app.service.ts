import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {environment} from "../environments/environment";

@Injectable()
export class AppService {
  private SERVER: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  getAnswerList(category_id: number): Promise<any> {
    return this.http.get(this.SERVER + '/api/answer?category_id=' + category_id)
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  getSocial(site: string): Promise<any> {
    return this.http.get(this.SERVER + '/api/social?site=' + site)
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
