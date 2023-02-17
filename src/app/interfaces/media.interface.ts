import { Resource } from "./resource.interface";

export interface Media {
    enlarged: Resource | null;
    thumbnail: Resource | null;
}
