import { Component, ViewChild } from '@angular/core';
import articles from 'src/assets/articles.json';
import { Article } from './models/article.model';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'souptik_portfolio';
  events: string[] = [];
  opened: boolean = false;
  articles: Array<Article> = articles;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(public router: Router) {}

  navigate(path: string){
    this.router.navigate([path]);
    this.sidenav.close();
  }

}
