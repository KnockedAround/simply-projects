export class Project {
  id: number;
  name: string;
  userId: number;

  constructor(id: number, name: string, userId: number) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}
