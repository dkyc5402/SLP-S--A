import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {  GlobalService} from '../../services/global.service';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {
  backbutton: any;
  token:any;studentid:any;
  subscription: any;

  constructor(private router: Router, private platform: Platform, private globalService: GlobalService, private storage: Storage) {

  }

  displayUserData: any;
  username: any;
  // levelInfo_DisplayName: any;
  schoolInfo_Name: any;

  ngOnInit() {
    this.globalService.GenerateLoginInfo();
    this.profile();
  
  }
  ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigateByUrl('tabs/main')
    });
    console.log('the platform height is '+this.platform.height())
    console.log('student id :', this.studentid)

  }

  profile() {
    this.storage.get('authlogin').then((val) => {
      console.log(val)
      this.displayUserData = val
      this.username = val.username
      // this.levelInfo_DisplayName = val.levelInfo_DisplayName
      this.schoolInfo_Name = val.schoolInfo_Name

    });
  }

  InitiateSession()
  {
    this.router.navigateByUrl('tabs/session-view/session-initiate');
  }
  JoinSession()
  {
    this.router.navigateByUrl('tabs/session-view/session-join');
  }
  MySession()
  {    
    this.router.navigateByUrl('tabs/session-view/session-my');
  }
  Help(){
    this.router.navigateByUrl('tabs/support/logout');
  }

  //Retrieve Account Info


  
}
