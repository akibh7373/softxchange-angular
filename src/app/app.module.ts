import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturedInComponent } from './components/featured-in/featured-in.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ApiComponent } from './pages/api/api.component';
import { MarketSurveillanceComponent } from './pages/market-surveillance/market-surveillance.component';
import { ProfessionalServicesComponent } from './pages/professional-services/professional-services.component';
import { SupportServicesComponent } from './pages/support-services/support-services.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsSingleComponent } from './pages/news-single/news-single.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { CaseStudiesSingleComponent } from './pages/case-studies-single/case-studies-single.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { TermsOfServicesComponent } from './pages/terms-of-services/terms-of-services.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PlatformFeaturesCardComponent } from './components/platform-features-card/platform-features-card.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedInComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    FeaturesComponent,
    ApiComponent,
    MarketSurveillanceComponent,
    ProfessionalServicesComponent,
    SupportServicesComponent,
    NewsComponent,
    NewsSingleComponent,
    CaseStudiesComponent,
    CaseStudiesSingleComponent,
    AboutComponent,
    CareerComponent,
    TermsOfServicesComponent,
    PrivacyPolicyComponent,
    PlatformFeaturesCardComponent,
    JobCardComponent,
    LeadershipComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
