import {ChangeDetectorRef, Component} from '@angular/core';
import {Service} from "../service";
import {map, Observable} from "rxjs";
import {User, Wallet} from "../types";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$ = new Observable<User>;
  walletsSum$ = new Observable<number>;
  acc$ = 0;

  constructor(
    private service: Service,
    private changeDetection: ChangeDetectorRef
  ) {
    this.user$ = this.service.user().pipe(map((user: User) => user));
    this.user$.subscribe((user) => this.changeDetection.markForCheck());
    this.walletsSum$ = this.service
      .user()
      .pipe(
        map(user => user),
        map(user => user.wallets),
        map(wallets => {
          this.acc$ = wallets.reduce((acc: number, wallet: Wallet) => acc + wallet.amount!, 0)
          return this.acc$;
        })
      );
  }
}
