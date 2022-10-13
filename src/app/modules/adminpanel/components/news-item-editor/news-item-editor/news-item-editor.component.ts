import { Ifullnewsitem } from './../../../../../types/ifullnewsitem';
import { Inewsitem } from './../../../../../types/inewsitem';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-news-item-editor',
  templateUrl: './news-item-editor.component.html',
  styleUrls: ['./news-item-editor.component.scss']
})
export class NewsItemEditorComponent implements OnInit {

  public editorConfigfull : AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: 'div',
    defaultFontName: 'Arial',
    toolbarPosition:'bottom',
    toolbarHiddenButtons: [
      ['justifyLeft',
      'justifyCenter',
      'justifyRight',
      'justifyFull','indent',
      'outdent',    'link',
      'unlink','toggleEditorMode']
    ]

  };

  public editorConfigshort : AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '5rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: 'div',
    defaultFontName: 'Arial',
    toolbarPosition:'bottom',
    toolbarHiddenButtons: [
      ['justifyLeft',
      'justifyCenter',
      'justifyRight',
      'justifyFull','indent',
      'outdent',    'link',
      'unlink','toggleEditorMode']
    ]

  };

public isViewShowed:boolean = false;

  @Input() public Item:Ifullnewsitem = {Id:0, IsDisabled:false, ShortText:'', Title:'', Fulltext:''};
  @Output() public onContentChange = new EventEmitter<Ifullnewsitem>();

  constructor() { }

  ngOnInit(): void {

  }

  public onSaveChanges():void{
    debugger
    this.onContentChange.emit(this.Item);
  }

public onHideShowButtonClick():void{
  this.isViewShowed = !this.isViewShowed;
}

}
