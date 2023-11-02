import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { AddassociateComponent } from '../addassociate/addassociate.component';

@Component({
  selector: 'app-associatelisting',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.css']
})
export class AssociatelistingComponent {
  datasource:any;
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;
  displayedColumns:string[]= ["code","name","email","phone","address","type","group","status","action"];
  AssociateList = [
    {
      "id": 1,
      "name": "Namrata Vardekar1",
      "email": "vketan2188@gmail.com",
      "phone": "7977120757",
      "type": "CUSTOMER",
      "address": "Sachin",
      "group": "level1",
      "status": true
    },
  ]
  constructor(private dialog: MatDialog,private store:Store) {}
  FunctionAdd() {
    this.OpenPopup(0, 'Create Associate');
  }
  OpenPopup(code: number, title: string) {
    
    this.dialog.open(AddassociateComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title,
      },
    });
  }
}
