import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'oag-gallery-container',
    templateUrl: './gallery-container.component.html',
    styleUrls: ['./gallery-container.component.scss']
})
export class GalleryContainerComponent {
    constructor(public data: DataService) { }
}
