import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from "@angular/forms";
import { HttpModule }   from '@angular/http';

import {AppComponent}           from "./app.component";
import {AboutComponent}         from "./about/components/about.component";
import {UserHomeComponent}          from "./user/user-home.component";
import {UserFormComponent}      from "./user/user-form.component";
import {UserListComponent}      from "./user/user-list.component";
import {UserService}            from "./user/user.service";
import {InMemoryDataService}    from './in-memory-data.service';

import {routing, appRoutingProviders}   from './app.routing';

import {AgGridModule}           from 'ag-grid-ng2';
import {InMemoryWebApiModule}   from 'angular-in-memory-web-api';


@NgModule({
    imports: [
        AgGridModule.withComponents([
            UserListComponent
        ]),
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AboutComponent,
        AppComponent,
        UserHomeComponent,
        UserFormComponent,
        UserListComponent
    ],
    providers: [
        appRoutingProviders,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}