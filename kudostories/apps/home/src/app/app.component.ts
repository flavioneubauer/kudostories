import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@kudostories/api-interfaces';
import { ContainerModel } from '@kudostories/home/feature-sobre';

@Component({
  selector: 'kudostories-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  model : ContainerModel = {
    creatorUrl : environment.creatorUrl,
    viewerUrl: environment.viewerUrl
  };
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {}

}
