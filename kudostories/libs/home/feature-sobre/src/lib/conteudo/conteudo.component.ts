import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConteudoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
