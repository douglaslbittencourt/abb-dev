import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abb-imagem',
  templateUrl: './abb-imagem.component.html',
  styleUrls: ['./abb-imagem.component.css']
})
export class AbbImagemComponent {
  @Input() public url: string;
  @Input() public descricao: string;
}
