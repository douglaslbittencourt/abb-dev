import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abb-imagem',
  templateUrl: './abb-imagem.component.html',
  styleUrls: ['./abb-imagem.component.css']
})
export class AbbImagemComponent {
    @Input() imagem = 'https://picsum.photos/200/300'
    @Input() descricao = 'Tetse'
}