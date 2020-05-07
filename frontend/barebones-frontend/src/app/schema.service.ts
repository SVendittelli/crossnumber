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

  public getSchema(): Observable<any> {
    return this.schemaServer.getSchema();
  }

  public getTestRoot(): Observable<string> {
    return this.schemaServer.getTestRoot();
  }

  public getTest2x2(): Observable<any> {
    return this.schemaServer.getTest2x2();
  }

  public getTest2x3(): Observable<any> {
    return this.schemaServer.getTest2x3();
  }

  public getAllPuzzles(): { puzzleNames: string[], puzzles$: Observable<any>[] } {
    return {
      puzzleNames: ['schema', 'test2x2', 'test2x3'],
      puzzles$: [this.getSchema(), this.getTest2x2(), this.getTest2x3()]
    };
  }
}
