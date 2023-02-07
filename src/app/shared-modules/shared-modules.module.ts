import { TranslateModule } from '@ngx-translate/core';
import { DetailsComponent } from './../details/details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ],
  exports: [DetailsComponent],
})
export class SharedModulesModule { }
