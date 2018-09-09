import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ContactTopComponent } from './contacttop/contacttop.component';
import { ContactBottomComponent } from './contactbottom/contactbottom.component';
import { ContactSectionComponent } from './contactsection/contactsection.component';
import { FooterContactUsComponent } from './footercontactus/footercontactus.component';
import { FooterLinksComponent } from './footerlinks/footerlinks.component';
import { FooterPostsComponent } from './footerposts/footerposts.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CopyRightComponent } from './copyright/copyright.component';
import { MortgageSearchComponent } from './mortgagesearch/mortgagesearch.component';
import { FeaturedPropertiesComponent } from './featuredproperties/featuredproperties.component';
import { HelpSectionComponent } from './helpsection/helpsection.component';
import {RecentPropertiesComponent} from './recentproperties/recentproperties.component';
import { UserCountersComponent } from './usercounters/usercounters.component';
import { UserBlogsComponent } from './userblogs/userblogs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent , ContactTopComponent,
    ContactBottomComponent,
    ContactSectionComponent,
    FooterContactUsComponent,
    FooterLinksComponent,
    FooterPostsComponent,
    SubscribeComponent,
    CopyRightComponent,
    MortgageSearchComponent,
    FeaturedPropertiesComponent,
    HelpSectionComponent,
    RecentPropertiesComponent,
    UserCountersComponent,
    UserBlogsComponent
  ],
  exports: [
    LoaderComponent    , ContactTopComponent,
    ContactBottomComponent,
    ContactSectionComponent,
    FooterContactUsComponent,
    FooterLinksComponent,
    FooterPostsComponent,
    SubscribeComponent,
    CopyRightComponent,
    MortgageSearchComponent,
    FeaturedPropertiesComponent,
    HelpSectionComponent,
    RecentPropertiesComponent,
    UserCountersComponent,
    UserBlogsComponent
  ]
})
export class SharedModule { }
