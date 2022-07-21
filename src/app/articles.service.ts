import { Article } from './news.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles:Article[]=[
    new Article('./assets/image/istockphoto-1336937059-612x612.jpg','Entertainment', 'Movies Shooting' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date,true),
    new Article('./assets/image/featured.jpg','Sports', 'Sports News' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,true),
     new Article('./assets/image/tech2.jpg','Technology', 'Technology Events' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/pexels-photo-3183197.jpeg','Business', 'Business News' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,true),
    new Article('./assets/image/8044d51de3a0b760478bd8622d6cca79463b4d5c.webp','Science', 'Small World' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,true),
    new Article('./assets/image/home-banner2-1.jpg','Health', 'Health & Medical' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,true),

    new Article('./assets/image/ent2.jpg','Entertainment', 'Movies Shooting' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/sports1.jpg','Sports', 'Sports News' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/tech1.jpg','Technology', 'Technology Events' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/business-article-3914492.jpg','Business', 'Business News' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/AI-1024x576.jpg','Science', 'Small World' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/istockphoto-1032637132-612x612.jpg','Health', 'Health & Medical' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/istockphoto-1336937059-612x612.jpg','Entertainment', 'Movies Shooting' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/featured.jpg','Sports', 'Sports News' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/tech2.jpg','Technology', 'Technology Events' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/pexels-photo-3183197.jpeg','Business', 'Business News' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/8044d51de3a0b760478bd8622d6cca79463b4d5c.webp','Science', 'Small World' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),
    new Article('./assets/image/home-banner2-1.jpg','Health', 'Health & Medical' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam recusandae veniam id suscipit error nobis tempora quis in voluptatum.',new Date ,false),

  ]
  constructor() { }

  getId(index:number){
    return this.articles.slice()[index]
    }
}
