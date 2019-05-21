import { Component, OnInit } from '@angular/core';
import { ChapterDataService } from '../../chapter-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Verse } from './verse.model';

@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.css']
})
export class VersesComponent implements OnInit {
  id: string;
  verses: Verse[];
  versesCount: number;
  prev = 0;
  next = 0;
  pageCount = 0;
  verse: Verse;
  disableButton = false;
  constructor(
    private chapterDataService: ChapterDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.id = paramMap.get('id');
        this.chapterDataService.getVerses(this.id).subscribe(result => {
          this.verses = result.data;
          this.verse = this.verses[0];
        });
        this.chapterDataService.getChapter(this.id).subscribe(chapter => {
          this.versesCount = chapter.data.verses_count;
        });
      }
    });
  }

  prevHandler() {
    if (this.pageCount > 0) {
      this.pageCount--;
      this.verse = this.verses[this.pageCount];
    }
    if (this.pageCount <= this.versesCount - 1) {
      this.disableButton = false;
    }
  }

  nextHandler() {
    if (this.versesCount) {
      if (this.pageCount >= 0 && this.pageCount <= this.versesCount) {
        this.pageCount++;
        this.verse = this.verses[this.pageCount];
      }
      if (this.pageCount === this.versesCount - 1) {
        this.disableButton = true;
      }
    }
  }
}
