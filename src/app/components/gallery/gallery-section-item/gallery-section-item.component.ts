import { Component, Input } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
    selector: 'oag-gallery-section-item',
    templateUrl: './gallery-section-item.component.html',
    styleUrls: ['./gallery-section-item.component.scss']
})
export class GallerySectionItemComponent {
    @Input() public data: Item | null = null;
}
