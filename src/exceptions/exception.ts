import { Exception } from "./exception.type";


export class Exceptions {
  constructor(
    public readonly exception: Exception,
    public readonly message?: string,
  ) {}
}