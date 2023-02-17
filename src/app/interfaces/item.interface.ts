import { Media } from "./media.interface";

export interface Item {
    order: number;
    id: string;
    loaded: boolean;
    description: string | null;
    author: string | null;
    reference: string | null;
    media: Media;
}
