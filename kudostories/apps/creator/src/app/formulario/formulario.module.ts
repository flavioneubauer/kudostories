import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CampoPreenchimentoComponent } from '../campo-preenchimento/campo-preenchimento.component';
import { GravadorComponent } from '../gravador/gravador.component';

@NgModule({
  declarations: [CampoPreenchimentoComponent, GravadorComponent],
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule],
  exports: [CampoPreenchimentoComponent, GravadorComponent]
})
export class FormularioModule {}
