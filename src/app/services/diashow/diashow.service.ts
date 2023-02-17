import { Injectable } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';
import { DataService } from '../data/data.service';

@Injectable({
    providedIn: 'root'
})
export class DiashowService {

    public currentSectionTitle: string | null = null;
    public currentSectionSubtitle: string | null = null;

    public currentItem: Item | null = null;
    public beforeItem: Item | null = null;
    public afterItem: Item | null = null;

    public showDiashowSettings = false;
    public hideButtomControls: boolean = false;
    public darkmode: boolean = false;
    public playing: boolean = false;
    public infinite: boolean = false;

    public interval: number = 5;
    private internalIntervalMs: number = this.interval * 1000;
    private internalIntervalObject: any = null;

    public presentationAreaTransition: string = "";
    public presentationAreaOpacity: string = "";

    public showPublicLink = false;
    public publicLinkContentIsVisibale = false;

    constructor(private data: DataService) { }

    public setItemById(id: string) {
        const obj = this.data.getItemWithNeiboursById(id);

        this.currentItem = obj.currentItem;
        this.beforeItem = obj.beforeItem;
        this.afterItem = obj.afterItem;
        this.currentSectionTitle = obj.sectionTitle;
        this.currentSectionSubtitle = obj.sectionSubtitle;
    }

    public before() {
        if (this.beforeItem === null) return;

        this.setItemById(this.beforeItem.id);
    }

    public next() {
        if (this.afterItem === null) {

            if (this.playing) {

                if (this.showPublicLink && !this.publicLinkContentIsVisibale) {

                    this.playPause();
                    this.publicLinkContentIsVisibale = true;

                    setTimeout(() => this.playPause(), this.data.object?.link.duration ?? (this.internalIntervalMs * 2));
                }
                else {
                    this.publicLinkContentIsVisibale = false;

                    if (this.infinite) {
                        this.setItemById(this.data.getFirstItemById());
                    }
                    else {
                        this.playPause();
                    }
                }
            }

            return;
        }

        const id = this.afterItem.id;
        const t = 300;

        this.presentationAreaTransition = "opacity ease 300ms"
        this.presentationAreaOpacity = "0"

        setTimeout(() => this.setItemById(id), t);
        setTimeout(() => {
            this.presentationAreaOpacity = "1"
            this.presentationAreaTransition = "opacity ease 300ms"
        }, 1.1 * t);
    }

    public playPause() {
        if (this.playing) {
            clearInterval(this.internalIntervalObject);
            this.playing = false;
        }
        else {
            this.internalIntervalObject = setInterval(() => {
                this.next();
            }, this.internalIntervalMs);
            this.playing = true;
        }
    }

    public intervalUp() {
        this.interval++;
        this.internalIntervalMs = this.interval * 1000;
    }

    public intervalDown() {
        if (this.interval <= 1)
            return;

        this.interval--;
        this.internalIntervalMs = this.interval * 1000;
    }
}
