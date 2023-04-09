import { constructTypedRouter } from "typed-react-router";
import { routes } from "./routes";

export const TypedRouter = constructTypedRouter(routes);

export { routes };
