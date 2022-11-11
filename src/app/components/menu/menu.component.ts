import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Config } from '../../types/dto/config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  @Input() public config : Config |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
