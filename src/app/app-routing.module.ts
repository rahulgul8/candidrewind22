import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{ path: 'contactus', component: ContactUsComponent, data: { state: 'contactus' } },
{ path: 'gallery', component: GalleryComponent, data: { state: 'gallery' } },
{ path: 'home', component: HomeComponent, data: { state: 'home' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
