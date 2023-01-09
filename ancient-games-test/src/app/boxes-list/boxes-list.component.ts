import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Service} from "../service";
import {BoxEdge} from "../types";

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.scss']
})
export class BoxesListComponent {
  boxes$ = new Observable<BoxEdge[]>;

  constructor(private service: Service) {
    this.boxes$ = this.service.boxes();
  }
}
