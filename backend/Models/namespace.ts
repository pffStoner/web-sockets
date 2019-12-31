import { Room } from "./room";

export interface Namespace {
  rooms: { [key: string] : Room }
}