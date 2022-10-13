import { Inewsitem } from './../../types/inewsitem';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public currentnews:Inewsitem[]=[];
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.currentnews=this.newsService.GetNewsItems(1,10);
  }

}
