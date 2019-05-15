import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-abb-parceiros',
  templateUrl: './abb-parceiros.component.html',
  styleUrls: ['./abb-parceiros.component.css', '../../app.component.css']
})

export class AbbParceirosComponent implements OnInit {

  cards = [
    {
      img: './assets/images/cliente_logo/cliente_amgem.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_baxter.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_ems.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_ferring.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_libbs.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_shire.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_torrent_farma.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_ucb.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_uniao_quimica.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_valtant.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_libbs.png'
    },
    {
      img: './assets/images/cliente_logo/cliente_ucb.png'
    },
  ];
  slides: any = [[]];

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

}
