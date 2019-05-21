import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChapterDataService } from '../chapter-data.service';
import { Chapter } from '../components/chapter/chapter.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit, OnDestroy {
  chapters: Chapter[] = [];
  private chapterSub: Subscription;
  constructor(private chapterService: ChapterDataService) {}

  ngOnInit() {
    this.chapterService.getChapters();
    this.chapterSub = this.chapterService.getChapterUpdateListener().subscribe(
      (chapters: Chapter[]) => {
        console.log(chapters);
        this.chapters = chapters;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.chapterSub.unsubscribe();
  }
}
