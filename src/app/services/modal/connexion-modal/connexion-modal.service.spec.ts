import { TestBed } from '@angular/core/testing';

import { ConnexionModalService } from './connexion-modal.service';

describe('ConnexionModalService', () => {
  let service: ConnexionModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
