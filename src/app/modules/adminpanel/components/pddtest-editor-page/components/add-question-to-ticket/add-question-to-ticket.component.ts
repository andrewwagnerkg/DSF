import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-question-to-ticket',
  templateUrl: './add-question-to-ticket.component.html',
  styleUrls: ['./add-question-to-ticket.component.scss']
})
export class AddQuestionToTicketComponent implements OnInit {

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
      [    'undo',
      'redo',
      'bold',
      'italic',
      'underline',
      'strikeThrough',
      'subscript',
      'superscript',
      'justifyLeft',
      'justifyCenter',
      'justifyRight',
      'justifyFull',
      'indent',
      'outdent',
      'insertUnorderedList',
      'insertOrderedList',
      'heading',
      'fontName',
      'fontSize',
      'textColor',
      'backgroundColor',
      'customClasses',
      'link',
      'unlink',
      'insertVideo',
      'insertHorizontalRule',
      'removeFormat',
      'toggleEditorMode']
    ]

  };

  constructor() { }

  ngOnInit(): void {
  }

}
