import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-abb-banner',
  templateUrl: './abb-banner.component.html',
  styleUrls: ['./abb-banner.component.scss']
})
export class AbbBannerComponent {

  @Input() title: string;

}
