import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
