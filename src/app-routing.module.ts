import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './app/main-page/main-page.component';
import { AddEmployeeComponent } from './app/add-employee/add-employee.component';
import { MakeTeamsComponent } from './app/make-teams/make-teams.component';



const routes: Routes = [
    { path: 'mainPage', component: MainPageComponent },
    { path: 'addEmployee', component: AddEmployeeComponent },
    { path: 'makeTeams', component: MakeTeamsComponent },
    { path: '', component: MainPageComponent },
    { path: '**', component: MainPageComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}

export const routingComponents = [MainPageComponent, AddEmployeeComponent, MakeTeamsComponent];
