import { BaseEntity, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";

export abstract class Thing extends BaseEntity<Thing, "id"> {
  @PrimaryKey()
  id: string = v4();

  @Property()
  createdAt: Date = new Date();

  @Property()
  createdBy: string = "system";

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({ onUpdate: () => "system" })
  updatedBy: string = "system";

  @Property()
  deletedAt?: Date;

  @Property()
  deletedBy?: string;
}
