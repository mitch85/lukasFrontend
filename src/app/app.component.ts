import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faBars } from '@fortawesome/free-brands-svg-icons';
import { faD } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'lukasFrontend';

  faBars = faBars;

  gridOptions: GridOptions = {
    defaultColDef: { editable: true },
    alwaysShowHorizontalScroll: true,
    alwaysShowVerticalScroll: false,
  };
  // Each Column Definition results in one Column.
  public columnDefs = [
    {
      headerName: 'Gebäudedaten',
      children: [
        {
          // headerName: 'Gebäude',
          field: 'Gebäude',
          minWidth: 80,
          resizable: true,
        },
        {
          //     headerName: 'Age',
          field: 'RaumNr.',
          minWidth: 80,
          resizable: true,
        },
        {
          field: 'BBA',
          width: 60,
          resizable: true,
          // field: 'country',
        },
        {
          field: 'Lüftungsbereich',
          width: 150,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Raumname',
          width: 100,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Zuluftstrang',
          width: 110,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Abluftstrang',
          width: 110,
          resizable: true,

          // field: 'country',
        },
      ],
    },
    {
      headerName: 'Raumdaten',
      children: [
        {
          // headerName: 'Gebäude',
          field: 'Fläche',
          width: 100,
          resizable: true,
        },
        {
          //     headerName: 'Age',
          field: 'Raumhöhe',
          width: 100,
          resizable: true,
        },
        {
          field: 'Raumvolumen',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'Zugangsbereich',
          width: 135,
          resizable: true,

          // field: 'country',
        },
      ],
    },
    {
      headerName: 'Zuluft',
      children: [
        {
          // headerName: 'Gebäude',
          field: 'Saldo Zu/Ab',
          width: 100,
          resizable: true,
        },
        {
          //     headerName: 'Age',
          field: 'Primär',
          width: 100,
          resizable: true,
        },
        {
          field: 'Sek. 1',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'S1 v. Raum',
          width: 135,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Sek. 2',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'S2 v. Raum',
          width: 135,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Sek. 3',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'S3 v. Raum',
          width: 135,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Sek. 4',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'S4 v. Raum',
          width: 135,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'S gleicher LB',
          width: 135,
          resizable: true,

          // field: 'country',
        },
      ],
    },
    {
      headerName: 'Abluft',
      children: [
        {
          //     headerName: 'Age',
          field: 'Primär',
          width: 100,
          resizable: true,
        },
        {
          field: 'Sek. 1',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'S1 n. Raum',
          width: 135,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Sek. 2',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'S2 n. Raum',
          width: 135,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Sek. 3',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'S3 n. Raum',
          width: 135,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'Sek. 4',
          resizable: true,
          width: 120,
          // field: 'country',
        },
        {
          field: 'S4 n. Raum',
          width: 135,
          resizable: true,

          // field: 'country',
        },
        {
          field: 'S gleicher LB',
          width: 135,
          resizable: true,

          // field: 'country',
        },
      ],
    },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
}
