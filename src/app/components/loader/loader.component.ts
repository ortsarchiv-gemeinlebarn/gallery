import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'oag-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
    public title: string = environment.title;
}
