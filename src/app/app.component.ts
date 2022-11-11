import { Component, OnInit } from '@angular/core';
import { Config } from './types/dto/config';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'РТШ ОСТО';

  config:Config | undefined;
  constructor(private configService: ConfigService){}

  ngOnInit(): void {
    this.configService.getCommonRequisites().subscribe({next:(data:Config)=>
      {
        this.config = data;
      }});
  }

}
