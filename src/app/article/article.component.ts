import { ArticlesService } from './../articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../news.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;
  backgroundImg: any;
  id!: number
  constructor(private articleService: ArticlesService,
    private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      let id = params['id'];
      this.article = this.articleService.articles.find((x: any) => x.route == `/article/${id}`);
      this.backgroundImg = `url(${this.article.imagPath})`
    })
  }
}


