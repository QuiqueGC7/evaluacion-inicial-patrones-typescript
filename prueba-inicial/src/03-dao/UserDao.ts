// ...existing code...

export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserDao {
  private users: User[] = [
    { id: 1, name: "Ana", email: "ana@test.com" },
    { id: 2, name: "Luis", email: "luis@test.com" }
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  delete(id: number): boolean {
    const before = this.users.length;
    this.users = this.users.filter(user => user.id !== id);

    return this.users.length !== before;
  }
}