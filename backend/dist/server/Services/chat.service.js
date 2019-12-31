"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatService {
    constructor() {
        this.namespaces = {};
    }
    joinNamespace() {
        const id = JSON.stringify(new Date());
        this.namespaces[id] = {
            rooms: {}
        };
    }
    joinRoom(namespace, room, user) {
        const id = JSON.stringify(new Date());
        this.namespaces[namespace].rooms[id].users.push(user);
    }
}
//# sourceMappingURL=chat.service.js.map