import { Component } from '@angular/core';
import { AppService } from './app.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  jokes;
  constructor(appService : AppService){
    this.jokes = appService.getAllJokes();
  }
}
