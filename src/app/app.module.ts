import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SildebarComponent} from './slidebar/sildebar.component';
import {ServiceItemComponent} from './service-item/service-item.component';
import {ContactComponent} from './contact/contact.component';
import {TopbarComponent} from './topbar/topbar.component';
import {CompanyInfoComponent} from './company-info/company-info.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';

import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ServiceContentComponent} from './service-content/service-content.component';
import {RouterModule, Routes} from '@angular/router';
import {TipsComponent} from './shared/tips/tips.component';
import {EnterpriseInfoComponent} from './slidebar/enterprise-info/enterprise-info.component';
import {BusinessQueryComponent} from './slidebar/business-query/business-query.component';
import {NoticeComponent} from './slidebar/notice/notice.component';
import {QuestionComponent} from './slidebar/question/question.component';
import {ReactiveFormsModule} from '@angular/forms';

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  // {path: '**', component: HomeComponent, redirectTo: TipsComponent, pathMatch: 'full'},
  {path: 'login/:login', component: LoginComponent},
  {path: 'register/:register', component: RegisterComponent},
  {path: 'topbar/:topbar', component: TopbarComponent},
  {path: 'serviceContent/:serviceName', component: ServiceContentComponent},
  {path: 'notice', component: NoticeComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'businessQuery', component: BusinessQueryComponent},
  {path: 'enterpriseInfo', component: EnterpriseInfoComponent},

  /*children:[
    {path:'enterpriseInfo',component:}
  ]*/

];

@NgModule({
  declarations: [
    AppComponent,
    SildebarComponent,
    ServiceItemComponent,
    ContactComponent,
    TopbarComponent,
    CompanyInfoComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ServiceContentComponent,
    TipsComponent,
    EnterpriseInfoComponent,
    BusinessQueryComponent,
    NoticeComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
