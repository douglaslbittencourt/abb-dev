import {Component, OnInit, OnChanges, SimpleChanges, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-abb-parceiros',
  templateUrl: './abb-parceiros.component.html',
  styleUrls: ['./abb-parceiros.component.css', '../../app.component.css']
})

export class AbbParceirosComponent implements OnInit {

  previousSize: number;

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
  slides1: any = [[]];
  slides3: any = [[]];

@HostListener('window:resize', ['$event']) onResize(event) {
  if (event.target.innerWidth > 785) {
    this.slides = this.slides3;
    } else {
      this.slides = this.slides1;
  }
}

  ngOnInit() {
    this.slides1 = this.initChunckThree(this.cards, 1);
    this.slides3 = this.initChunckThree(this.cards, 3);

    if (window.innerWidth > 785) {
      this.slides = this.slides3;
    } else {
      this.slides = this.slides1;
    }
  }

  private initChunckOne(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  private initChunckThree(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}
