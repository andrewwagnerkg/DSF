import { getTestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-logoname',
  templateUrl: './logoname.component.html',
  styleUrls: ['./logoname.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogonameComponent implements OnInit {

  @Input() Imageclass!: string;

  text!:string

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    //this.text = this.configService.getCommonRequisites().companyName;
  }

}
