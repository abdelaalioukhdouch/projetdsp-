import { MatDialog } from '@angular/material/dialog';
import { CustomFormModel } from './../../shared/custom-form/custom-form.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SideNavConfig } from '../../side-nav/side-nav.component';
import { CustomFormComponent } from '../../shared/custom-form/custom-form.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHomeComponent implements OnInit {

  sideNavConfig: SideNavConfig = {
    sideNavButtons: [
      { _id: `Users`, title: `Users`, type: 'routerLink', link: '/admin/users', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="currentColor" d="M4 7.2C4 4.9584 5.7584 3.2 8 3.2H19.9984C20.2106 3.19979 20.4141 3.28387 20.5643 3.43375C20.7145 3.58363 20.799 3.78703 20.7992 3.9992C20.7994 4.21137 20.7153 4.41494 20.5655 4.56512C20.4156 4.7153 20.2122 4.79979 20 4.8H13.9072L13.448 6.168C12.8831 7.84583 12.3167 9.52317 11.7488 11.2H13.6C13.8122 11.2 14.0157 11.2843 14.1657 11.4343C14.3157 11.5843 14.4 11.7878 14.4 12C14.4 12.2122 14.3157 12.4157 14.1657 12.5657C14.0157 12.7157 13.8122 12.8 13.6 12.8H11.2064C10.6576 14.4239 10.0998 16.0447 9.5328 17.6624C9.0176 19.1024 8.3328 19.9776 7.4688 20.4448C6.6608 20.8816 5.8272 20.88 5.2544 20.88H5.2C4.96661 20.88 4.74278 20.7873 4.57775 20.6223C4.41271 20.4572 4.32 20.2334 4.32 20C4.32 19.7666 4.41271 19.5428 4.57775 19.3777C4.74278 19.2127 4.96661 19.12 5.2 19.12C5.8272 19.12 6.2464 19.104 6.6304 18.896C6.9824 18.7056 7.448 18.264 7.8752 17.0688C8.1712 16.2416 8.7264 14.6256 9.3472 12.8H7.2C6.98783 12.8 6.78434 12.7157 6.63431 12.5657C6.48429 12.4157 6.4 12.2122 6.4 12C6.4 11.7878 6.48429 11.5843 6.63431 11.4343C6.78434 11.2843 6.98783 11.2 7.2 11.2H9.8912C10.5231 9.33633 11.1524 7.47179 11.7792 5.6064L12.0528 4.8H8C6.6416 4.8 5.6 5.8416 5.6 7.2C5.6 7.41217 5.51571 7.61566 5.36569 7.76569C5.21566 7.91571 5.01217 8 4.8 8C4.58783 8 4.38434 7.91571 4.23431 7.76569C4.08429 7.61566 4 7.41217 4 7.2Z" fill="black"/></svg>` },
      { _id: `Tickets`, title: `Tickets`, type: 'routerLink', link: '/admin/tickets', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="currentColor" d="M4 7.2C4 4.9584 5.7584 3.2 8 3.2H19.9984C20.2106 3.19979 20.4141 3.28387 20.5643 3.43375C20.7145 3.58363 20.799 3.78703 20.7992 3.9992C20.7994 4.21137 20.7153 4.41494 20.5655 4.56512C20.4156 4.7153 20.2122 4.79979 20 4.8H13.9072L13.448 6.168C12.8831 7.84583 12.3167 9.52317 11.7488 11.2H13.6C13.8122 11.2 14.0157 11.2843 14.1657 11.4343C14.3157 11.5843 14.4 11.7878 14.4 12C14.4 12.2122 14.3157 12.4157 14.1657 12.5657C14.0157 12.7157 13.8122 12.8 13.6 12.8H11.2064C10.6576 14.4239 10.0998 16.0447 9.5328 17.6624C9.0176 19.1024 8.3328 19.9776 7.4688 20.4448C6.6608 20.8816 5.8272 20.88 5.2544 20.88H5.2C4.96661 20.88 4.74278 20.7873 4.57775 20.6223C4.41271 20.4572 4.32 20.2334 4.32 20C4.32 19.7666 4.41271 19.5428 4.57775 19.3777C4.74278 19.2127 4.96661 19.12 5.2 19.12C5.8272 19.12 6.2464 19.104 6.6304 18.896C6.9824 18.7056 7.448 18.264 7.8752 17.0688C8.1712 16.2416 8.7264 14.6256 9.3472 12.8H7.2C6.98783 12.8 6.78434 12.7157 6.63431 12.5657C6.48429 12.4157 6.4 12.2122 6.4 12C6.4 11.7878 6.48429 11.5843 6.63431 11.4343C6.78434 11.2843 6.98783 11.2 7.2 11.2H9.8912C10.5231 9.33633 11.1524 7.47179 11.7792 5.6064L12.0528 4.8H8C6.6416 4.8 5.6 5.8416 5.6 7.2C5.6 7.41217 5.51571 7.61566 5.36569 7.76569C5.21566 7.91571 5.01217 8 4.8 8C4.58783 8 4.38434 7.91571 4.23431 7.76569C4.08429 7.61566 4 7.41217 4 7.2Z" fill="black"/></svg>` },
    ]
  }
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

}