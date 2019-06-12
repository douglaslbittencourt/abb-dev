import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-abb-parceiros',
  templateUrl: './abb-parceiros.component.html',
  styleUrls: ['./abb-parceiros.component.css', '../../app.component.css']
})

export class AbbParceirosComponent implements OnInit {

  cards = [
    {
      img: './assets/images/cliente_logo/abbvie.png'
    },
    {
      img: './assets/images/cliente_logo/alexion.png'
    },
    {
      img: './assets/images/cliente_logo/allergan.png'
    },
    {
      img: './assets/images/cliente_logo/apsen.png'
    },
    {
      img: './assets/images/cliente_logo/bauschlomb.png'
    },
    {
      img: './assets/images/cliente_logo/baxter.png'
    },
    {
      img: './assets/images/cliente_logo/besinshealthcare.png'
    },
    {
      img: './assets/images/cliente_logo/ems.png'
    },
    {
      img: './assets/images/cliente_logo/ferring.png'
    },
    {
      img: './assets/images/cliente_logo/grupofleury.png'
    },
    {
      img: './assets/images/cliente_logo/libbs.png'
    },
    {
      img: './assets/images/cliente_logo/shire.png'
    },
    {
      img: './assets/images/cliente_logo/takeda.png'
    },
    {
      img: './assets/images/cliente_logo/torrentpharma.png'
    },
    {
      img: './assets/images/cliente_logo/ucb.png'
    },
    {
      img: './assets/images/cliente_logo/uniaoquimica.png'
    },
    {
      img: './assets/images/cliente_logo/unitedmedical.png'
    },
    {
      img: './assets/images/cliente_logo/ferring.png'
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
