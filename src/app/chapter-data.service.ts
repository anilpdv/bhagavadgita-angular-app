import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chapter } from './components/chapter/chapter.model';
import { Subject } from 'rxjs';
import { Verse } from './components/verses/verse.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterDataService {
  constructor(private http: HttpClient) {}
  private chapters: Chapter[] = [];
  private chapterUpdate = new Subject<Chapter[]>();

  getChapters() {
    this.http
      .get<{ data: Chapter[] }>('http://localhost:3001/')
      .subscribe(result => {
        this.chapters = result.data;
        this.chapterUpdate.next([...this.chapters]);
      });
  }

  getChapterUpdateListener() {
    return this.chapterUpdate.asObservable();
  }

  getChapter(id: string) {
    return this.http.get<{ data: Chapter }>(
      'http://localhost:3001/chapter/show/' + id
    );
  }

  getVerses(chapterId: string) {
    return this.http.get<{ data: Verse[] }>(
      `http://localhost:3001/chapter/show/${chapterId}/verses`
    );
  }
}
