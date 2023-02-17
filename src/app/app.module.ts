import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DiashowContainerComponent } from './components/diashow/diashow-container/diashow-container.component';
import { DiashowControlsComponent } from './components/diashow/diashow-controls/diashow-controls.component';
import { GalleryContainerComponent } from './components/gallery/gallery-container/gallery-container.component';
import { GalleryHeaderComponent } from './components/gallery/gallery-header/gallery-header.component';
import { GallerySectionComponent } from './components/gallery/gallery-section/gallery-section.component';
import { GallerySectionItemComponent } from './components/gallery/gallery-section-item/gallery-section-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DiashowContainerComponent,
        DiashowControlsComponent,
        GalleryContainerComponent,
        GalleryHeaderComponent,
        GallerySectionComponent,
        GallerySectionItemComponent,
        LoaderComponent,
        PageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
