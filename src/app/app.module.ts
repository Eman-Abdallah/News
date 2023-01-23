import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { EditorPickComponent } from './editor-pick/editor-pick.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { PreloaderComponent } from './preloader/preloader.component';
import { CategoriesComponent } from './categories/categories.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http ,'./assets/i18n/','.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LatestNewsComponent,
    EditorPickComponent,
    AboutComponent,
    ArticleComponent,
    PreloaderComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SelectButtonModule,
    [SwiperModule],
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
