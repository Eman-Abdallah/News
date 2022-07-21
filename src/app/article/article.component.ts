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
  aritcle!: Article;
  id!:number
  constructor(private articleService:ArticlesService,
    private routes:ActivatedRoute) { }

  ngOnInit(): void {
 console.log(history.state);

      }
  }


