export class User {

  constructor(
    public username: string,
    public email: string,
    public password: string,
    public address: {
      street: string,
      zipCode: string,
      city: string}
  ) {}

}
