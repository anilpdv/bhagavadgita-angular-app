import { TestBed } from '@angular/core/testing';

import { ChapterDataService } from './chapter-data.service';

describe('ChapterDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChapterDataService = TestBed.get(ChapterDataService);
    expect(service).toBeTruthy();
  });
});
