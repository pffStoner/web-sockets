import { User } from "./user";

export interface Room {
  id   : string,
  name : string
  users: Array<User>
}