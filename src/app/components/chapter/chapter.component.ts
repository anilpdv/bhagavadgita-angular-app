import { Component, OnInit } from '@angular/core';
import { ChapterDataService } from '../../chapter-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Chapter } from './chapter.model';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  id: string;
  chapter: Chapter;
  constructor(
    private chapterService: ChapterDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.id = paramMap.get('id');
        this.chapterService.getChapter(this.id).subscribe(result => {
          this.chapter = result.data;
        });
      }
    });
  }
}
