import { ContainerModel } from './../models/container-model';
import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {

  @Input() model : ContainerModel = {creatorUrl : '', viewerUrl : ''};

  constructor() {}

  ngOnInit(): void {}

  navigateTo(app: string){
    console.log(app, this.model);
    window.location.href = app == 'creator'? this.model.creatorUrl: this.model.viewerUrl;
  }
}
