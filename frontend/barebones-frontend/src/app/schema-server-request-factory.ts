import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpJsonRequestFactory } from './http-json-request-factory';

class MessageJSON {
  info: string;
}

export class SchemaServerRequestFactory {
  private url = 'http://localhost:5000';

  constructor(private httpRequests: HttpJsonRequestFactory) { }

  // GET Requests
  public getRoot(): Observable<string> {
    return this.httpRequests.get<MessageJSON>(this.url).pipe(map(this.extractString));
  }

  public getSchema(): Observable<any> {
    return this.httpRequests.get(`${this.url}/schema`);
  }

  public getTestRoot(): Observable<string> {
    return this.httpRequests.get<MessageJSON>(`${this.url}/test`).pipe(map(this.extractString));
  }

  public getTest2x2(): Observable<string> {
    return this.httpRequests.get(`${this.url}/test/2x2`);
  }

  public getTest2x3(): Observable<string> {
    return this.httpRequests.get(`${this.url}/test/2x3`);
  }

  private extractString(jsonResponse: MessageJSON): string {
    return jsonResponse.info;
  }
}
