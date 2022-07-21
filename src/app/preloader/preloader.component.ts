import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
isLoaded=false
  constructor() { }

  ngOnInit(): void {
   this.isLoaded=true;

}
}
