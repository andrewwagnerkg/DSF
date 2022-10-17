import { IUserQuestion } from 'src/app/types/iuser-question';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-qustion',
  templateUrl: './edit-qustion.component.html',
  styleUrls: ['./edit-qustion.component.scss']
})
export class EditQustionComponent implements OnInit {

  public question:string='';
  public answer:string='';
  @Input() currentItem:IUserQuestion = {Id:0, IsDisabled: false, Title:'', Text:''};
  @Output() onSaveChanges = new EventEmitter<IUserQuestion>();
  constructor() { }

  ngOnInit(): void {
    this.question = this.currentItem.Title;
    this.answer = this.currentItem.Text;
  }

  public onSubmit(form: NgForm):void{
    this.onSaveChanges.emit({Id:this.currentItem.Id, IsDisabled: this.currentItem.IsDisabled, Title:this.question, Text:this.answer});
    form.reset();
  }

}
