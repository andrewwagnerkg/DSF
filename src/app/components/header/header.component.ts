import { Config } from '../../types/dto/config';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { CompanyrequisitesInterface } from 'src/app/types/companyrequisites';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() public config:Config | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
