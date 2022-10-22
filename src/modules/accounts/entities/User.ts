import { v4 as uuidV4 } from 'uuid';

class User {
  id?: string = uuidV4();

  email: string;

  password: string;

  name: string;

  constructor(email: string, password: string, name: string) {
    // eslint-disable-next-line no-unused-expressions
    this.email = email;
    this.password = password;
    this.name = name;
  }
}

export { User };
