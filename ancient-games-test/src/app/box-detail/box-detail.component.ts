import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable, Subscription} from "rxjs";
import {BoxEdge, Item, ItemVariant} from "../types";
import {Service} from "../service";

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.scss']
})
export class BoxDetailComponent {
  box$ = new Observable<BoxEdge[]>;
  boxId: string;
  prize$: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private service: Service
  ) {
    this.boxId = this.route.snapshot.params['id']
    this.box$ = this.service.boxes().pipe(
      map(boxes => boxes.filter((box: BoxEdge) => box?.node?.id === this.boxId))
    );
  }

  openBox(): void {
    this.service.openBox({boxId: this.boxId})
  }
}
