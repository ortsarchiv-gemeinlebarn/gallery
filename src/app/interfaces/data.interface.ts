import { Section } from "./section.interface";

export interface Data {
    title: string;
    subtitle: string | null;
    authors: string | null;
    sections: Section[];
    pages: any;
    link: any;
}
