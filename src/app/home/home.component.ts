import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Navigation, Autoplay, EffectFade} from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public swiperConfig: SwiperOptions={
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  pagination: true,
  navigation: true,
  autoplay: {
    delay: 2500,
  },
}
  constructor() { }

  ngOnInit(): void {
    Swiper.use([ Navigation , Autoplay , EffectFade])
  }

}
