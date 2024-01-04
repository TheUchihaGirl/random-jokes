import { Injectable } from '@angular/core';
import {client} from './trpc.model';
import { Observable, from, tap } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public getAllJokes():Observable<any>{
    return from(client.getAllJokes.query()).pipe(
      tap((data)=>{console.log(data)})
    );
  }
}
