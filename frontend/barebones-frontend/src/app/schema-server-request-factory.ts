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

  private extractString(jsonResponse: MessageJSON): string {
    return jsonResponse.info;
  }
}
