import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, ModalController, PopoverController } from "@ionic/angular";
import { AssignmentsService } from 'src/app/services/assignments.service';
import { GlobalService } from 'src/app/services/global.service';
import { ModalpopupPage } from '../../../modalpopup/modalpopup.page';
import { Storage } from '@ionic/storage';
import { apiurl } from 'src/app/model/global-api';

@Component({
  selector: 'app-headerpop',
  templateUrl: './headerpop.component.html',
  styleUrls: ['./headerpop.component.scss'],
})
export class HeaderpopComponent implements OnInit {

  constructor(
    private popover: PopoverController,
    private router: Router,
    private modalController: ModalController,
    private storage: Storage, 
    private assignmentsService: AssignmentsService, 
    private nativeHttp: HTTP, 
    private globalService: GlobalService,
    private alertController: AlertController,
  ) { }
 
  token: any; studentid: any;

  ngOnInit() {

   }

  ClosePopover() {
    this.popover.dismiss();
  }

  Help() {
    this.ClosePopover();
    this.router.navigateByUrl('tabs/support/logout');
  }

  OpenModal() {
    this.ClosePopover();
    this.modalController.create({ component: ModalpopupPage }).then((modalElement) => {
      modalElement.present();
    })
  }

  Logout() {

    this.token = this.globalService.getselectedtoken()
    this.studentid = this.globalService.getselectedStudentId()

    console.log(this.studentid)
    console.log(this.token)
    this.nativeHttp.setDataSerializer('json');
    this.nativeHttp.post(apiurl.apiUrl + 'student/logout', {
      "Authentication_Token": this.token,
      "User_Id": this.studentid
    }, {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
      .then(async response => {
        try {
          this.ClosePopover()
          const alert = await this.alertController.create({
            header: 'Logout',
            // subHeader: 'Sub Alert',
            message: 'Are you sure you want to logout?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('You clicked me');
              }
            },
            {
              text: 'Okay',
              cssClass: 'secondary',
              handler: () => {
                //  console.log('Second Handler');
                this.storage.remove('mysession')
                this.storage.remove('assignmentdetails')
                this.storage.remove('authlogin')
                this.storage.remove('joinsession')
                this.storage.remove('chatdetails')
                this.storage.remove('User_Id')
                this.storage.remove('Authentication_Token')
                this.router.navigateByUrl('/login')
              }

            }]
          });
          await alert.present();

        } catch (e) {
          console.error(e);
        }
      })
      .catch(response => {
        // prints 403
        console.log(response.status);
        // prints Permission denied
        console.log(response.error);
        this.assignmentsService.presentError();

      });
  }
  
}


