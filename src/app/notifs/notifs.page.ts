import { Component, OnInit } from '@angular/core';
//import { WebapiService } from '../services/webapi.service';
import { AlertController,LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';  
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.page.html',
  styleUrls: ['./notifs.page.scss'],
})
export class NotifsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
