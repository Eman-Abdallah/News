import { PreloaderService } from './../preloader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  loading = this.preLoader.loading$;
  constructor( private preLoader:PreloaderService) { }

  ngOnInit(): void {

}
}
