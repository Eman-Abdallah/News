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
 currentLang="en"
 @Input() textDir: string = 'ltr';

  constructor(public translate: TranslateService,
   ){
    translate.setDefaultLang(this.currentLang);
this.currentLang=localStorage.getItem('currentLang') || 'en';
this.translate.use(this.currentLang)
   }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      console.log(this.translate);

      })
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
  changLanguage() :void{
    if(this.currentLang=== 'en'){
      this.currentLang='ar'
      document.documentElement.style.direction='rtl'
      document.querySelector('.navbar')?.classList.add
      ('changed')
    }else{
      this.currentLang='en'
      document.documentElement.style.direction='ltr'
      document.querySelector('.navbar')?.classList.remove
      ('changed')
    }
    this.translate.use(this.currentLang)
    localStorage.setItem('currentLang',this.currentLang);
  }

}
