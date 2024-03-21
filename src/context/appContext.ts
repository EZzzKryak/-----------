import { createContext } from "react";
import { Headphone } from "../mockData/types";

export const ProductsContext = createContext<Headphone[]>([]);
