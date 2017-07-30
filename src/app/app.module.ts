import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPreviewerComponent } from './color-previewer/color-previewer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ColorPickerComponent,
    ColorPreviewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
