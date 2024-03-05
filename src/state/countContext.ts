import { createContext } from "react";

export const CountContext = createContext<{
  countState: number;
  countDispatch: React.Dispatch<string>;
}>({
  countState: 0,
  countDispatch: () => null,
});
