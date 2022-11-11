import { Inewsitem } from './../../types/inewsitem';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Config } from 'src/app/types/dto/config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public currentnews:Inewsitem[]=[];
  public config:Config | undefined;

  constructor(private newsService:NewsService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.currentnews=this.newsService.GetNewsItems(1,10);
    this.configService.getCommonRequisites().subscribe({next:(data:Config)=>
      {
        this.config = data;
      }});
      console.log(this.config);
  }

}
