import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'oag-gallery-header',
    templateUrl: './gallery-header.component.html',
    styleUrls: ['./gallery-header.component.scss']
})
export class GalleryHeaderComponent {
    constructor(public data: DataService) { }
}
