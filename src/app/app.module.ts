import { Observable } from 'rxjs';
import { SharedModulesModule } from './shared-modules/shared-modules.module';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from './messages/messages.component';
import { PersonNamePipe } from './person-name.pipe';
import { HighlightDirective } from './highlight.directive';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablePageComponent } from './table-page/table-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewChildComponent } from './viewChild/viewChild.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function appInitializerFactory(translate: TranslateService) {
  return () => {
    translate.addLangs(['en', 'sr'])
    translate.setDefaultLang('en')
    const browserLang = translate.getBrowserLang();
    return translate.use(browserLang.match(/en|sr/) ? browserLang : 'en');
  };
}
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    UsersComponent,
    ContactComponent,
    MessagesComponent,
    PersonNamePipe,
    HighlightDirective,
    TablePageComponent,
    NewDialogComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModulesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule
  ],

  providers: [{
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [TranslateService],
    multi: true
  }],
  bootstrap: [AppComponent],
  exports: [DetailsComponent]
})
export class AppModule { }
