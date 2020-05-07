import { TestBed } from '@angular/core/testing';

import { PlayerSubService } from './player-sub.service';

describe('PlayerSubService', () => {
  let service: PlayerSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
