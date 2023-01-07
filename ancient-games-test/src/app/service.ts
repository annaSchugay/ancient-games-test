import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs';
import {GET_BOXES, GET_USER, OPEN_BOX, UPDATE_WALLET_SUBSCRIPTION} from "./gql";
import {BoxEdge, OpenBoxInput, User, Wallet} from "./types";

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(
    private apollo: Apollo
  ) {
  }

  boxes() {
    return this.apollo
      .watchQuery<BoxEdge[]>({query: GET_BOXES})
      .valueChanges
      .pipe(map((result: any) => result.data.boxes.edges));
  }

  user() {
    return this.apollo
      .watchQuery<User>({query: GET_USER})
      .valueChanges
      .pipe(map((result: any) => result.data.currentUser));
  }

  openBox({boxId}: OpenBoxInput): void {
    this.apollo.mutate({
      mutation: OPEN_BOX,
      variables: {
        input: {boxId}
      }
    })
      .subscribe(res => {console.log('res>>>>> ', res)}
      )
  }

  updateWallet(): void {
    this.apollo.subscribe({
      query: UPDATE_WALLET_SUBSCRIPTION
    })
      .subscribe(res => {console.log('res>>>>> ', res)}
      )
  }
}
