import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() maxTimeMinutes! : number;
  @Output() expireTime = new EventEmitter<void>();

  private currentSecond: number = 0;
  public remainingTime! : number;
  private intervalFunction! : any;

  constructor() {
  }

  ngOnInit(): void {
    this.remainingTime = this.getRemainingTime(this.maxTimeMinutes, this.currentSecond);
    this.StartTimer();
  }


  private StartTimer()
  {
    this.currentSecond = 0;

    this.intervalFunction = setInterval(()=>this.TimerTick(), 1000);
  }

  private getRemainingTime(maxTimeMinets: number, currentSecond: number): number{
    return maxTimeMinets * 60 - currentSecond;
  }

  private TimerTick(): void{
    this.currentSecond ++;
    this.remainingTime = this.getRemainingTime(this.maxTimeMinutes, this.currentSecond);
    if( this.remainingTime <= 0) {
      this.expireTime.emit();
      clearInterval(this.intervalFunction);
    }
  }
}
