import { ITicketQuestionAnswer } from './../../../../../../types/iticket-question-answer';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ITicketQuestion } from 'src/app/types/iticket-question';

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

@Output() public applyAddOrEditQuestion:EventEmitter<ITicketQuestion> = new EventEmitter<ITicketQuestion>();
@Output() public cancelAddOrEditquestion:EventEmitter<void> = new EventEmitter<void>();
@Input() public questionForChange!:ITicketQuestion;

private currentAnswers!:ITicketQuestionAnswer[];

  constructor() { }

  ngOnInit(): void {
    this.currentAnswers = this.questionForChange?.Answers ?? [];
  }

  get CountOfAnswers(){
   return this.questionForChange?.Answers.length ?? 0;
  }

  public onAddAnswerButtonClick():void{
    this.currentAnswers.push({Id:0, IsRight:false, Text:'', IsSuccess: false, IsUserAnswer:false});
  }

  public onCancelButtonClick():void{
    this.cancelAddOrEditquestion.emit();
  }

  public onAddOrEditQuestionButtonClick():void{
    debugger
    this.questionForChange.Isactive = true;
    this.questionForChange.LastUpdate = new Date;
    this.questionForChange.Answers = this.currentAnswers;
    this.applyAddOrEditQuestion.emit(this.questionForChange);
  }

  public onDeleteItemClick(item: ITicketQuestionAnswer){
    const index = this.questionForChange.Answers.indexOf(item, 0);
    if(index>-1)
    this.questionForChange.Answers.splice(index, 1);
  }

}
