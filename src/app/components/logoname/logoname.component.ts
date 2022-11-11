import { Config } from 'src/app/types/dto/config';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logoname',
  templateUrl: './logoname.component.html',
  styleUrls: ['./logoname.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogonameComponent implements OnInit {

  @Input() Imageclass!: string;

  @Input() public config:Config | undefined;

  text!:string

  constructor() { }

  ngOnInit(): void {
  }

}
