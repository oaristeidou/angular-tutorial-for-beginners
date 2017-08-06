import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPreviewerComponent } from './color-previewer/color-previewer.component';
import { ColorSampleComponent } from './color-sample/color-sample.component';
import { DirectivesIntroComponent } from './directives-intro/directives-intro.component';
import { CollapseOnClickDirective } from './collapse-on-click.directive';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDirective } from './hero.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ColorPickerComponent,
    ColorPreviewerComponent,
    ColorSampleComponent,
    DirectivesIntroComponent,
    CollapseOnClickDirective,
    HeroesComponent,
    HeroDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
