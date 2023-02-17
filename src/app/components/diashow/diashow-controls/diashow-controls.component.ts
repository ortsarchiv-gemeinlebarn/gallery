import { Component } from '@angular/core';
import { DiashowService } from 'src/app/services/diashow/diashow.service';

@Component({
    selector: 'oag-diashow-controls',
    templateUrl: './diashow-controls.component.html',
    styleUrls: ['./diashow-controls.component.scss']
})
export class DiashowControlsComponent {

    constructor(public diashow: DiashowService) { }

}
