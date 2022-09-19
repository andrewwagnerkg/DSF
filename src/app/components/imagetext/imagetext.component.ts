import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagetext',
  templateUrl: './imagetext.component.html',
  styleUrls: ['./imagetext.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagetextComponent implements OnInit {

  @Input() faIcon!:string
  @Input() iconStyle!:string
  @Input() textstyle!:string

  constructor() { }

  ngOnInit(): void {
  }

}
