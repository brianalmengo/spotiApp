import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const RUTAS: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: '**', pathMatch: 'full', component: HomeComponent}
];