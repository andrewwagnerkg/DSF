import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public html:string="";
  constructor(private contactsService:ContactsService) { }

  ngOnInit(): void {
    this.html=this.contactsService.GetHtml();
  }

}
