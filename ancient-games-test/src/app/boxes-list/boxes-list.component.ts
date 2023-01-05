import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {BoxesListService} from "../services/boxes-list.service";
import {BoxEdge} from "../types";

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.scss']
})
export class BoxesListComponent {
  boxes$ = new Observable<BoxEdge[]>;

  constructor(private boxesListService: BoxesListService) {
    this.boxes$ = this.boxesListService.boxes();
  }
}
