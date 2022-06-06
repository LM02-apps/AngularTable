import {Component} from '@angular/core';

export interface PeriodicElement {
  id: number;
  birthDate: string;
  firstName: string;
  lastName: string;
  gender: string;
  hireDate:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  /*
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
*/
  {id: 10001, birthDate: "1953-09-01", firstName: "Georgi", lastName: "Facello", gender: "M",hireDate: "1986-06-25"},
  {
    id: 10002,
    birthDate: "1964-06-01",
    firstName: "Bezalel",
    lastName: "Simmel",
    gender: "F",
    hireDate: "1985-11-20",
  },
  {
    id: 10003,
    birthDate: "1959-12-02",
    firstName: "Parto",
    lastName: "Bamford",
    gender: "M",
    hireDate: "1986-08-27T22:00:00.000+0000",
  },
  {
    id: 10004,
    birthDate: "1954-04-30",
    firstName: "Chirstian",
    lastName: "Koblick",
    gender: "M",
    "hireDate": "1986-11-30",

  },
  {
    id: 10005,
    birthDate: "1955-01-20",
    firstName: "Kyoichi",
    lastName: "Maliniak",
    gender: "M",
    hireDate: "1989-09-11T22:00:00.000+0000",

  }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['id', 'birthDate', 'firstName', 'lastName'];
  dataSource = ELEMENT_DATA;

}


