import { Component } from '@angular/core';
import {Service} from "../service";
import {map, Observable} from "rxjs";
import {User, Wallet} from "../types";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$ = new Observable<User[]>;
  wallets$ = new Observable<Wallet[]>;
  constructor(private service: Service) {
    this.user$ = this.service.user().pipe(map((user: User[]) => user));
    this.wallets$ = this.service.user().pipe(map(user => user.wallets));
  }
}
