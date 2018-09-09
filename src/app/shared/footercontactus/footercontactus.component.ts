import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-nest-footercontactus',
    templateUrl: './footercontactus.component.html',
    styleUrls: ['./footercontactus.component.scss']
})

export class FooterContactUsComponent implements OnInit {

    @Input() isLoading = false;
    @Input() message: string;
  
    constructor() { }
  
    ngOnInit() { }
}