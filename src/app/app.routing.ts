import {Routes, RouterModule}   from "@angular/router";
import {ModuleWithProviders}    from "@angular/core";
import {AboutComponent}         from "./about/components/about.component";
import {UserHomeComponent}          from "./user/user-home.component";
import {UserFormComponent}      from "./user/user-form.component";
import {UserListComponent}      from "./user/user-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'about', component: AboutComponent, data: {title: 'About'}},
    {path: 'user', component: UserHomeComponent, data: {title: 'User'}},
    {path: 'cadastro', component: UserFormComponent, data: {title: 'User Form'}},
    {path: 'cadastro/:id', component: UserFormComponent, data: {title: 'Edit User'}},
    {path: 'user-list', component: UserListComponent, data: {title: 'User List'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
