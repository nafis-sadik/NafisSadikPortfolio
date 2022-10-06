import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {SiteRoutingModule} from "./site/site-routing.module";

const routes: Routes = [
  { path: '', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
