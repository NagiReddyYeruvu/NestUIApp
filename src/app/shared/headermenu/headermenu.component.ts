import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../core/authentication/authentication.service';
import { I18nService } from '../../core/i18n.service';


@Component({
    selector: 'app-headermenu',
    templateUrl: './headermenu.component.html',
    styleUrls: ['./headermenu.component.scss']
})

export class HeaderMenuComponent implements OnInit {
    constructor(private router: Router,
        private authenticationService: AuthenticationService,
        private i18nService: I18nService) { }
        ngOnInit() { }
}