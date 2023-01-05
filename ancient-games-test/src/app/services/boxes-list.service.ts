import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs';
import {GET_BOXES} from "../gql/boxes-list";
import {BoxEdge} from "../types";

@Injectable({
  providedIn: 'root'
})
export class BoxesListService {
  constructor(
    private apollo: Apollo
  ) { }

  boxes() {
    return this.apollo
      .watchQuery<BoxEdge[]>({ query: GET_BOXES })
      .valueChanges
      .pipe(map((result: any) => result.data.boxes.edges));
  }
}
