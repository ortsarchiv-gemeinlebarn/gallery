import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'oag-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    public page: any = null;

    constructor(private data: DataService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const key = params['key'];
            console.log("[OAG]", "[Page]", "Open Page with key =", key);

            this.page = this.data.object?.pages.find((p: any) => p?.key == key);
        });
    }
}
