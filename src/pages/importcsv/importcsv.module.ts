import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImportcsvPage } from './importcsv';

@NgModule({
  declarations: [
    ImportcsvPage,
  ],
  imports: [
    IonicPageModule.forChild(ImportcsvPage),
  ],
  exports: [
    ImportcsvPage
  ]
})
export class ImportcsvPageModule {}
