import { Component, Input } from '@angular/core';
import { Section } from 'src/app/interfaces/section.interface';

@Component({
    selector: 'oag-gallery-section',
    templateUrl: './gallery-section.component.html',
    styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent {

    @Input() public data: Section | null = null;
}
