import { TestBed } from '@angular/core/testing';

import { MostraModalService } from './mostra-modal.service';

describe('MostraModalService', () => {
  let service: MostraModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostraModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
