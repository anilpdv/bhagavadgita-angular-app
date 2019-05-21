import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { VersesComponent } from './components/verses/verses.component';

@NgModule({
  declarations: [AppComponent, ChaptersComponent, ChapterComponent, HeaderComponent, VersesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ClarityModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
