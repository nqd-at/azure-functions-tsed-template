import { Property, Entity } from "@mikro-orm/core";
import { Thing } from "./Thing";

@Entity()
export class User extends Thing {
  @Property()
  givenName: string;

  @Property()
  familyName: string;
}
