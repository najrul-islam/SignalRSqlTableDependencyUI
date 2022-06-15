import { TestBed } from '@angular/core/testing';

import { SignalrHubServiceService } from './signalr-hub-service.service';

describe('SignalrHubServiceService', () => {
  let service: SignalrHubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalrHubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
