import { Component, OnInit } from '@angular/core';
import { ChapterDataService } from '../../chapter-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Verse } from './verse.model';
import { Chapter } from '../chapter/chapter.model';

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
          console.log(this.verses);
          this.verse = this.verses[0];
        });
        this.chapterDataService.getChapter(this.id).subscribe(chapter => {
          console.log(chapter.data.verses_count);
          this.versesCount = chapter.data.verses_count;
        });
      }
    });
  }

  prevHandler() {
    console.log('before decreamenting prev' + this.pageCount);

    if (this.pageCount > 0) {
      this.pageCount--;
      this.verse = this.verses[this.pageCount];
    }
    if (this.pageCount <= this.versesCount - 1) {
      this.disableButton = false;
    }
    console.log('after decrease prev' + this.pageCount);
  }

  nextHandler() {
    if (this.versesCount) {
      console.log('before next' + this.pageCount);
      if (this.pageCount >= 0 && this.pageCount <= this.versesCount) {
        this.pageCount++;
        this.verse = this.verses[this.pageCount];
      }
      if (this.pageCount === this.versesCount - 1) {
        console.log('page count is equal to versesCount');
        this.disableButton = true;
      }
      console.log('after increamenting next' + this.pageCount);
    }
  }
}
