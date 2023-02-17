import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiashowContainerComponent } from './components/diashow/diashow-container/diashow-container.component';
import { GalleryContainerComponent } from './components/gallery/gallery-container/gallery-container.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
    { path: 'gallery', component: GalleryContainerComponent },
    { path: 'diashow/:itemId', component: DiashowContainerComponent },
    { path: 'page/:key', component: PageComponent },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
