import { HttpJsonRequestFactory } from './http-json-request-factory';
import { SchemaServerRequestFactory } from './schema-server-request-factory';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {

  private schemaServer = new SchemaServerRequestFactory(new HttpJsonRequestFactory(this.http));

  constructor(private http: HttpClient) { }

  public getSchemaServerRoot(): Observable<string> {
    return this.schemaServer.getRoot();
  }
}
