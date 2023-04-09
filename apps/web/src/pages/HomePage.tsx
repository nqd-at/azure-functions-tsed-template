import { useLoaderData } from "react-router-dom";
import { indexService } from "../services/index.service";

export const loader = () => {
  return indexService().hello("Joey");
};

export const Component = () => {
  const data = useLoaderData();
  return <>{data}</>;
};
