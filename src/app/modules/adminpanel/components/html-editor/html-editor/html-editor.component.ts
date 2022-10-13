import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss']
})
export class HtmlEditorComponent implements OnInit {

  public editorConfig : AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
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

  @Input() public htmlContent = "";
  @Output() public onContentChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public htmlCallback():void{
    this.onContentChange.emit(this.htmlContent);
  }

}
