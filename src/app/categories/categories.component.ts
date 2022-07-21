import { Article } from './../news.model';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categorySelected=""
sportArticles:Article[]=[]
entArticles:Article[]=[]
scienceArticles:Article[]=[]
healthArticles:Article[]=[]
businessArticles:Article[]=[]
technologyArticles:Article[]=[]
  constructor(private articleService:ArticlesService) { }

  ngOnInit(): void {
this.sportArticles=this.articleService.articles.filter(article => article.catigory ==='Sports')
this.entArticles=this.articleService.articles.filter(article => article.catigory ==='Entertainment')
this.scienceArticles=this.articleService.articles.filter(article => article.catigory ==='Science')
this.healthArticles=this.articleService.articles.filter(article => article.catigory ==='Health')
this.businessArticles=this.articleService.articles.filter(article => article.catigory ==='Business')
this.technologyArticles=this.articleService.articles.filter(article => article.catigory ==='Technology')
  }
  article(category:string){
    this. categorySelected = category
    document.querySelector('.btn-outline-danger')?.classList.toggle('active')
  }
}
