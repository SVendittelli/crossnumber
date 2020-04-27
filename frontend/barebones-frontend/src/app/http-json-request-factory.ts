import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HttpJsonRequestFactory {
  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public put(url: string, body: any): Observable<any> {
    return this.http.put(url, body, this.httpOptions);
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, this.httpOptions);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url, this.httpOptions);
  }
}
