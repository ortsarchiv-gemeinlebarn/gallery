import { Component } from '@angular/core';
import { DataService } from './services/data/data.service';
import { DiashowService } from './services/diashow/diashow.service';

@Component({
    selector: 'oag-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public data: DataService, public diashow: DiashowService) { }

}
