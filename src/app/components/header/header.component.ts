import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { DiashowService } from 'src/app/services/diashow/diashow.service';

@Component({
    selector: 'oag-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(public data: DataService, public diashow: DiashowService, public route: ActivatedRoute) { }
}
