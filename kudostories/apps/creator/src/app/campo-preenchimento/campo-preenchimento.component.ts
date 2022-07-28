import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kudostories-campo-preenchimento',
  templateUrl: './campo-preenchimento.component.html',
  styleUrls: ['./campo-preenchimento.component.less'],
})
export class CampoPreenchimentoComponent implements OnInit {

  form !: FormGroup;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      "remetente" : ['', [Validators.required]],
      "destinatario" : ['', [Validators.required]],
    });
  }
}
