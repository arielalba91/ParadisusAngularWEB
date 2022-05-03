import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BaresComponent } from './bares/bares.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bares', component: BaresComponent },
    { path: 'habitaciones',  component: HabitacionesComponent },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule {

}