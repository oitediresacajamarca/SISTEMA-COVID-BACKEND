import { UsuarioRepository } from './usuario.repository';

describe('UsuarioRepository', () => {
  it('should be defined', () => {
    expect(new UsuarioRepository()).toBeDefined();
  });
});
