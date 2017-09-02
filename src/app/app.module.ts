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
import { CoreNgIfComponent } from './core-ng-if/core-ng-if.component';
import { DirectiveTabsComponent } from './directive-tabs/directive-tabs.component';
import { ShowOneContainerDirective } from './show-one-container.directive';
import { ShowOneDirective } from './show-one.directive';
import { ShowOneTriggerDirective } from './show-one-trigger.directive';
import { TemplateSyntaxPropertiesComponent } from './template-syntax-properties/template-syntax-properties.component';
import { TemplateSyntaxInterpolationComponent } from './template-syntax-interpolation/template-syntax-interpolation.component';
import { TemplateSyntaxEventsComponent } from './template-syntax-events/template-syntax-events.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { SortedPipe } from './sorted.pipe';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsWithServiceComponent } from './lessons-with-service/lessons-with-service.component';
import {LessonsService} from "./lessons.service";
import {HttpModule} from "@angular/http";
import {initObservable} from "./init-observable";

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
    HeroDirective,
    CoreNgIfComponent,
    DirectiveTabsComponent,
    ShowOneContainerDirective,
    ShowOneDirective,
    ShowOneTriggerDirective,
    TemplateSyntaxPropertiesComponent,
    TemplateSyntaxInterpolationComponent,
    TemplateSyntaxEventsComponent,
    AngularPipesComponent,
    SortedPipe,
    LessonsListComponent,
    LessonsWithServiceComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    initObservable();
  }
}
