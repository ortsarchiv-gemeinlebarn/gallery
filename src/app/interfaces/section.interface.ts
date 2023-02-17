import { Item } from "./item.interface";

export interface Section {
    order: number;
    title: string | null;
    subtitle: string | null;
    items: Item[];
}
