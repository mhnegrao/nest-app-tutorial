import { UserDto } from './../../shared/userDto';
import { IUserService } from 'src/shared/user.service.shared.ts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService implements IUserService {
  getAll(): string {
    return 'Listagem de usuários cadastrados';
  }
  getById(id: number | string): string {
    return JSON.stringify({ message: `Exibindo registro ID# ${id}` });
  }

  create(user: UserDto) {
    return JSON.stringify({
      message: 'Registro Adicionado',
      data: {
        user,
      },
    });
  }
  update(body: UserDto) {
    return JSON.stringify({
      message: 'Registro Atualizado',
      data: {
        body,
      },
    });
  }
  delete(id: number | string) {
    return JSON.stringify({ message: `Registro ID# ${id} Deletado` });
  }
}
