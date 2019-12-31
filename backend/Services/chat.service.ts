import { Namespace } from "../Models/namespace";
import { User } from "../Models/user";

class ChatService {

  namespaces: { [key: string]: Namespace } = {}

  constructor() {
  }

  joinNamespace () {
    const id = JSON.stringify(new Date());

    this.namespaces[id] = {
      rooms : {}
    }
  }

  joinRoom (namespace: string, room: string, user: User) {
    const id = JSON.stringify(new Date());

    this.namespaces[namespace].rooms[id].users.push(user) 
  }
  
}