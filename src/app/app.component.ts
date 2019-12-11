import { Component } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { GithubService } from './github.service';


@Component({
  selector: 'app-root',
  template: '<app-github></app-github>',
  providers: [HttpModule , GithubService]
})
export class AppComponent {
  title = 'sam';
}
