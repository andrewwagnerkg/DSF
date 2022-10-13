import { Ifullnewsitem } from './../types/ifullnewsitem';
import { Inewsitem } from './../types/inewsitem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsItems:Inewsitem[]=[
    {Id:1, Title:'news title 1', ShortText:'<h1>it</h1> just short text for news 1', IsDisabled: false},
    {Id:2, Title:'news title 1', ShortText:'it just <strong>short text for</strong> news 1', IsDisabled: false},
    {Id:3, Title:'news title 1', ShortText:'it just short text for news 1', IsDisabled: false},
    {Id:31, Title:'news title 1', ShortText:'it just short text for newsghjghjghjgjhghjgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjg 1', IsDisabled: false},
    {Id:322, Title:'news title 1', ShortText:'it just short text for news 1', IsDisabled: false},
    {Id:3112, Title:'news title 1', ShortText:'it just short text for news 1', IsDisabled: false},
    {Id:231, Title:'news title 1', ShortText:'it just short text for news 1', IsDisabled: false},
  ];
  private fullNewsItems:Ifullnewsitem[]=[
    {Id:1, Title:'news title 1', ShortText:'<h1>it</h1> just short text for news 1', IsDisabled: false, Fulltext:"some fullsdfasdfadsf"},
    {Id:2, Title:'news title 1', ShortText:'it just <strong>short text for</strong> news 1', IsDisabled: false, Fulltext:"some fullsdfasdfadsf"},
    {Id:3, Title:'news title 1', ShortText:'it just short text for news 1', IsDisabled: false, Fulltext:"some fullsdfasdfadsf"},
    {Id:31, Title:'news title 1', ShortText:'it just short text for newsghjghjghjgjhghjgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjg 1', IsDisabled: false, Fulltext:"some fullsdfasdfadsf"},
    {Id:322, Title:'news title 1', ShortText:'it just short text for news 1', IsDisabled: false, Fulltext:"some fullsdfasdfadsf"},
    {Id:3112, Title:'news title 1', ShortText:'it just short text for news 1', IsDisabled: false, Fulltext:"some fullsdfasdfadsf"},
    {Id:231, Title:'news title 1', ShortText:'it just short text for news 1', IsDisabled: false, Fulltext:"some fullsdfasdfadsf"},
  ];

  constructor() { }

  public GetNewsItems(pageNumber:number, countNews:number):Inewsitem[]{
    //TODO goto api
    return this.newsItems.filter(i=>!i.IsDisabled);
  }

  public GetNewsItemsWithDisabled(pageNumber:number, countNews:number):Inewsitem[]{
    //TODO goto api
    return this.newsItems;
  }

  public GetFullNewsById(id:number):Ifullnewsitem{
    //TODO goto API
    return this.fullNewsItems.find(n=>n.Id == id) ?? {Id:0, Title:'', ShortText:'', IsDisabled: false, Fulltext:''};
  }

  public SetFullNews(item:Ifullnewsitem):void{
    //TODO go to API
    this.fullNewsItems = this.fullNewsItems.filter(i=>i.Id != item.Id);
    this.fullNewsItems.push(item);
    this.newsItems = this.newsItems.filter(i=>i.Id != item.Id);
    this.newsItems.push(item);
  }

  public DisabledItem(item:Inewsitem):void{
    item.IsDisabled = !item.IsDisabled;
    this.DeleteItem(item);
    this.newsItems.push(item);
  }

  public DeleteItem(item:Inewsitem):void{
    //TODO goto api delete from local storage
    this.newsItems = this.newsItems.filter(i=>i.Id != item.Id);
  }

  public AddItem(item:Ifullnewsitem):void{
    item.Id = this.newsItems.length + 1;
    this.fullNewsItems.push(item);
    this.newsItems.push(item);
  }
}
