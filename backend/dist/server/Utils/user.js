"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Users {
    constructor() {
        this.users = [];
    }
    addUser(id, name, namespace, room) {
        let user = { id, name, namespace, room };
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        let user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }
    getUser(id) {
        return this.users.find((user) => user.id === id);
    }
    getUsersList(namespace, room) {
        // //add to array if true
        // // let users = this.users.filter((user) => user.room === room);
        // const users = this.users[namespace][room];
        // const usernames = users.map((user) => user.name);
        // return usernames;
    }
}
module.exports = { Users };
//# sourceMappingURL=user.js.map