import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: 'about', component: AboutComponent, pathMatch: 'full', data: { animation: 'AboutPage' } },
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage' } },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
