import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/students', pathMatch: 'full' }, // Redirect to StudentsComponent
    { path: 'home', component: HomeComponent },
    { path: 'students', component: StudentsComponent },
    { path: '**', component: PageNotFoundComponent } // Wildcard route for 404 page
];
