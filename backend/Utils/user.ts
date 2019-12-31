
import { User } from '../Models/user';

class Users {
  users : Array<User>

  constructor() {
    this.users = [];
  }

  addUser(id: string, name: string, namespace: string, room: string) {
    let user = { id, name, namespace, room };
    this.users.push(user);
    return user;
  }

  removeUser(id: string) {
    let user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !==id);
    }

    return user;
  }

  getUser(id: string) {
    return this.users.find((user) => user.id === id);
  }

  getUsersList(namespace: string, room: string) {
    // //add to array if true
    // // let users = this.users.filter((user) => user.room === room);
    // const users = this.users[namespace][room];
    // const usernames = users.map((user) => user.name);

    // return usernames;
  }
}

module.exports = {Users};