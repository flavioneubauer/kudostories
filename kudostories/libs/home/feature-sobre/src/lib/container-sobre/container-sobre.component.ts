import { ContainerModel } from './../models/container-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'container-sobre',
  templateUrl: './container-sobre.component.html',
  styleUrls: ['./container-sobre.component.less'],
})
export class ContainerSobreComponent implements OnInit {

  @Input() model : ContainerModel = {creatorUrl : '', viewerUrl : ''};

  constructor() {}

  ngOnInit(): void {}
}
