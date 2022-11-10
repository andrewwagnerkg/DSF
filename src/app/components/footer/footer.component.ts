import { ConfigService } from 'src/app/services/config.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  address!:string
  phone!:string
  email!:string

  constructor(private configservice:ConfigService) { }

  ngOnInit(): void {
    // this.address = this.configservice.getCommonRequisites().companyAddress
    // this.phone = this.configservice.getCommonRequisites().companyPhone
    // this.email = this.configservice.getCommonRequisites().companyEmail
  }

}
