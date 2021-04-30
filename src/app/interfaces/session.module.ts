export class SessionModule {
  constructor(
      public nombre: string,
      public roles: string,
      public token: string,
  ){};
}
