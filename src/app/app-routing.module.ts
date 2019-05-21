import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { VersesComponent } from './components/verses/verses.component';

const routes: Routes = [
  {
    path: '',
    component: ChaptersComponent
  },
  {
    path: 'chapter/:id',
    component: ChapterComponent
  },
  {
    path: 'chapter/:id/verses',
    component: VersesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
