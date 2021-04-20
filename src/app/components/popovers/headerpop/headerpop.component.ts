import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";

@Component({
  selector: 'app-headerpop',
  templateUrl: './headerpop.component.html',
  styleUrls: ['./headerpop.component.scss'],
})
export class HeaderpopComponent implements OnInit {

  constructor(
    private popover: PopoverController
  ) { }
 

  ngOnInit() { }

  ClosePopover() {
    this.popover.dismiss();
  }
}


