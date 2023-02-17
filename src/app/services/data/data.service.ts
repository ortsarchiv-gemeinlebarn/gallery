import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/interfaces/data.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public receiving: boolean = false;
    public object: Data | null = null;

    private flattenItems: Array<Item> = [];

    constructor(private http: HttpClient) {
        if (!this.receiving) {
            this.receiving = true;
            this.getGalleryDataObject().subscribe(dataObject => {
                this.object = dataObject;
                this.receiving = false;
                console.log("[OAG]", "[Gallery]", "Data Object received:", this.object);

                this.flattenItems = this.getFlattenItems();
            });
        }
    }

    private getGalleryDataObject(): Observable<Data> {
        return this.http.get<Data>(environment.data, { responseType: 'json' });
    }

    private getFlattenItems(): Array<Item> {
        return this.object?.sections.flatMap(section => section.items) ?? [];
    }

    public getFirstItemById(): string {
        return this.flattenItems[0].id;
    }

    public getItemWithNeiboursById(id: string | null): any {

        if (id === null) return;

        const section = this.object?.sections.find(s => s.items.find(i => i.id === id)) ?? null;
        const index = this.flattenItems.findIndex(item => item.id == id) ?? new Error("Not Found");

        return {
            currentItem: this.flattenItems[index],
            beforeItem: this.flattenItems[index - 1] ?? null,
            afterItem: this.flattenItems[index + 1] ?? null,
            sectionTitle: section?.title,
            sectionSubtitle: section?.subtitle
        }
    }
}
