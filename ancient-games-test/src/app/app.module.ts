import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxesListComponent } from './boxes-list/boxes-list.component';
import { BoxDetailComponent } from './box-detail/box-detail.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'

@NgModule({
  declarations: [
    AppComponent,
    BoxesListComponent,
    BoxDetailComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ApolloModule,
        HttpClientModule
    ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://api-staging.csgoroll.com/graphql',
            withCredentials: true
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
