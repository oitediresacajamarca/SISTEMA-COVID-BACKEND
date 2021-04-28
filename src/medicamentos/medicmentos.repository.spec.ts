import { MedicmentosRepository } from './medicmentos.repository';

describe('MedicmentosRepository', () => {
  it('should be defined', () => {
    expect(new MedicmentosRepository()).toBeDefined();
  });
});
