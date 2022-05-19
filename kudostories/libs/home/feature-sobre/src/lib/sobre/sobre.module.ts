import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerSobreComponent } from '../container-sobre/container-sobre.component';
import { MenuComponent } from '../menu/menu.component';
import { ConteudoComponent } from '../conteudo/conteudo.component';
import { ImagemLateralComponent } from '../imagem-lateral/imagem-lateral.component';

@NgModule({
  declarations: [
    ContainerSobreComponent,
    MenuComponent,
    ConteudoComponent,
    ImagemLateralComponent,
  ],
  imports: [CommonModule],
  exports: [ContainerSobreComponent],
})
export class SobreModule {}
