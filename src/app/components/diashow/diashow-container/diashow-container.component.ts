import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { DiashowService } from 'src/app/services/diashow/diashow.service';

@Component({
    selector: 'oag-diashow-container',
    templateUrl: './diashow-container.component.html',
    styleUrls: ['./diashow-container.component.scss']
})
export class DiashowContainerComponent implements OnInit {
    constructor(public data: DataService, public diashow: DiashowService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = params['itemId'];

            console.log("[OAG]", "[Gallery]", "open diashow with item id =", id);
            this.diashow.setItemById(id);
        });
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.key == "ArrowRight") {
            this.diashow.next();
        }

        if (event.key == "ArrowLeft") {
            this.diashow.before();
        }

        if (event.key == "Alt") {
            this.diashow.hideMenu = !this.diashow.hideMenu;
        }
    }
}

