import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IUserQuestion } from 'src/app/types/iuser-question';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IuserQuestionMessage } from 'src/app/types/iuser-question-message';

@Component({
  selector: 'app-send-question',
  templateUrl: './send-question.component.html',
  styleUrls: ['./send-question.component.scss']
})
export class SendQuestionComponent implements OnInit {

  @Output() onSendQuestion = new EventEmitter<IuserQuestionMessage>();

  public formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        'phone':['',[Validators.required, Validators.pattern("[0-9]{10}")]],
        'name':['',[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Zа-яА-Я_-]{2,15}")]],
        'message':['',[Validators.required, Validators.minLength(5), Validators.maxLength(255), Validators.pattern("[0-9a-zA-Zа-яА-Я_-]+")]]
      }
    );
  }

  get phone(){
    return this.formGroup.controls['phone'];
  }

  get name(){
    return this.formGroup.controls['name'];
  }

  get message(){
    return this.formGroup.controls['message'];
  }

  public onFormSubmit():void{
    this.formGroup.disable();
    this.onSendQuestion.emit({Phone:String(this.phone.value), Name:String(this.name.value), Message:String(this.message.value), IsReadead:false});
    this.formGroup.clearValidators();
    this.formGroup.reset();
    this.formGroup.enable();
  }

}
