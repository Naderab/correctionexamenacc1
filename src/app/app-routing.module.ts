import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'library', loadChildren: () => import('./features/app-library/app-library.module').then(m => m.AppLibraryModule) },
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
