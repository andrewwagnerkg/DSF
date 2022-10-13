import { Ifullnewsitem } from './../../../../types/ifullnewsitem';
import { Inewsitem } from './../../../../types/inewsitem';
import { NewsService } from './../../../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-editor-page',
  templateUrl: './news-editor-page.component.html',
  styleUrls: ['./news-editor-page.component.scss']
})
export class NewsEditorPageComponent implements OnInit {

  public newsList:Inewsitem[] = [];
  public isItemEdit:boolean=false;
  public selectedItem:Ifullnewsitem = {Id:0, IsDisabled:false, ShortText:'', Title:'', Fulltext:''};
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsList = this.newsService.GetNewsItemsWithDisabled(1,10);
  }

public EditNewsItem(item:Inewsitem):void{
  this.selectedItem = this.newsService.GetFullNewsById(item.Id);
  this.isItemEdit = !this.isItemEdit;
}

public DisabledNewsItem(item:Inewsitem):void{
  this.newsService.DisabledItem(item);
}

public DeleteNewsItem(item:Inewsitem):void{
  this.newsService.DeleteItem(item);
  this.newsList = this.newsService.GetNewsItemsWithDisabled(1,10);
}

public onBackClicked():void{
  this.selectedItem = {Id:0, IsDisabled:false, ShortText:'', Title:'', Fulltext:''};
  this.isItemEdit = !this.isItemEdit;
}

public onItemSaveChanges(item:Ifullnewsitem):void{
  this.newsService.SetFullNews(item);
  this.newsList = this.newsService.GetNewsItems(1,10);
  this.isItemEdit = !this.isItemEdit;
}

public onItemAdd(item:Ifullnewsitem):void{
  this.newsService.AddItem(item);
}
}
