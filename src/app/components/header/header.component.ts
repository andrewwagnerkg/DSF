import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { CompanyrequisitesInterface } from 'src/app/types/companyrequisites';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public address!:string;
    worktime:string | undefined
  public phone:string = "";
  config:CompanyrequisitesInterface = {companyAddress:"", companyEmail:"", companyName:"", companyPhone:"", companyWorktime:""};

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getCommonRequisites().subscribe({next:(data:any)=>
      {
        this.config = {...data};
        this.update();
      }});
      console.log(this.config);
  }

  update():void{
    debugger
    this.address  = this.config.companyAddress;
  }

}
