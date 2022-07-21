import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isChanging=true;
 currentLang!: string;
 @Input() textDir: string = 'ltr';

  constructor(public translate: TranslateService,
   ){
    translate.setDefaultLang('en');
this.currentLang=localStorage.getItem('currentLang') || 'en';
this.translate.use(this.currentLang)
if(this.currentLang=='en'){
  document.documentElement.style.direction='ltr'
  document.querySelector('.navbar')?.classList.remove
  ('changed')
}else{
  document.documentElement.style.direction='rtl'
  document.querySelector('.navbar')?.classList.add
  ('changed')
}
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      console.log(this.translate);

      })
  }

  changLang(lang:string){
 this.translate.use(lang);
 localStorage.setItem('currentLang',lang);
 if(lang=='en'){
  document.documentElement.style.direction='ltr';
  document.querySelector('.navbar')?.classList.remove
  ('changed')
}else{
  document.documentElement.style.direction='rtl'
  document.querySelector('.navbar')?.classList.add
  ('changed')
}
  }


}
