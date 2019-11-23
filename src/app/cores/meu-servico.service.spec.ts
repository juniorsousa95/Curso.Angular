import { TestBed } from '@angular/core/testing';

import { MeuServicoService } from './meu-servico.service';

describe('MeuServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeuServicoService = TestBed.get(MeuServicoService);
    expect(service).toBeTruthy();
  });
});
