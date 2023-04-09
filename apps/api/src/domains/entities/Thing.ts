import { BaseEntity, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";

export abstract class Thing extends BaseEntity<Thing, "id"> {
  @PrimaryKey()
  id: string = v4();

  @Property()
  createdAt: Date = new Date();

  @Property({ type: () => String })
  createdBy = "system";

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({ type: () => String, onUpdate: () => "system" })
  updatedBy = "system";

  @Property()
  deletedAt?: Date;

  @Property()
  deletedBy?: string;
}
