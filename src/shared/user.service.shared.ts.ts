/* eslint-disable @typescript-eslint/no-unused-vars */
import { IServiceBase } from './service.base.shared.ts';
import { UserDto } from './userDto';
export const USER_SERVICE = 'IUserService';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export abstract class IUserService extends IServiceBase<UserDto> {}
