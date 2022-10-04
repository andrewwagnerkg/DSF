import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTimeString'
})
export class ToTimeStringPipe implements PipeTransform {

  private minutes! : number;
  private seconds! : number;

  transform(value: number): string {
    this.minutes = Math.floor(value / 60);
    this.seconds = value - this.minutes * 60
    return `${isNaN(this.minutes)? value : this.minutes}:${isNaN(this.seconds) ? 0:this.seconds}`;
  }

}
