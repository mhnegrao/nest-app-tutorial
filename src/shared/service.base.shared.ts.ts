// eslint-disable-next-line @typescript-eslint/no-unused-vars
export abstract class IServiceBase<T> {
  abstract getAll();
  abstract getById(id: number | string);
  abstract create(item: T);
  abstract delete(id: number | string);
  abstract update(item: T);
}
