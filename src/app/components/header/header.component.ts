import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  address!:string
  worktime!:string
  phone!:string

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.address = this.configService.getCommonRequisites().companyAddress
    this.worktime = this.configService.getCommonRequisites().companyWorktime
    this.phone = this.configService.getCommonRequisites().companyPhone
  }

}
