import { ContactsService } from './../../../../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-editor-page',
  templateUrl: './contact-editor-page.component.html',
  styleUrls: ['./contact-editor-page.component.scss']
})
export class ContactEditorPageComponent implements OnInit {

  public html:string = '';
  constructor(private contactsService:ContactsService) { }

  ngOnInit(): void {
    this.html=this.contactsService.GetHtml();
  }

public onChangeContent(html:string):void{
this.contactsService.SetHtml(html);
}

}
