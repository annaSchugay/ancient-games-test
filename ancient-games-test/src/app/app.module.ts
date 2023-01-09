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
import {split, ApolloClientOptions, InMemoryCache} from '@apollo/client/core'
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from "@apollo/client/utilities";

interface Definition {
  kind: string;
  operation?: string;
};


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
      useFactory(httpLink: HttpLink): ApolloClientOptions<any> {
        const http = httpLink.create({
          uri: 'https://api-staging.csgoroll.com/graphql',
          withCredentials: true
        })

        const ws = new WebSocketLink({
          uri: 'wss://api-staging.csgoroll.com/graphql',
          options: {
            reconnect: true
          }
        })

        const link = split(
          ({ query }) => {
            const { kind, operation }: Definition = getMainDefinition(query);
            return kind === 'OperationDefinition' && operation === 'subscription';
          },
          ws,
          http
        )

        return {
          link,
          cache: new InMemoryCache()
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
