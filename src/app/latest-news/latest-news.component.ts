import { Article } from './../news.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  id!: number;
  aritcle!: Article;
  latestArticles: Article[]=[];
  constructor(  private router:Router,
    private articleService:ArticlesService,
    private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.latestArticles=this.articleService.articles.filter(article => article.catigory ==='Health')
    this.routes.params.subscribe(
      (param:Params)=>{
    this.id = +param['id']
    // this.aritcle=this.articleService.getId(this.id)
    this.latestArticles=this.articleService.articles.filter(article => article.latest===true)
      })
  }
  openArticle(i:number){
    // this.router.navigate(['/article'])
  }


}
