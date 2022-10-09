import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  constructor(private router:Router) {
   }

  ngOnInit(): void {
    this.router.navigateByUrl('adminpanel/commonsettings');
  }

}
