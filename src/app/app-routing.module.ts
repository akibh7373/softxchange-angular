import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
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
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsOfServicesComponent } from './pages/terms-of-services/terms-of-services.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'api', component: ApiComponent },
  { path: 'market-surveillance', component: MarketSurveillanceComponent },
  { path: 'professional-services', component: ProfessionalServicesComponent },
  { path: 'support-services', component: SupportServicesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news-single', component: NewsSingleComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'case-studies-single', component: CaseStudiesSingleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms-of-services', component: TermsOfServicesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
