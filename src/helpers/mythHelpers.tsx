import milkmen from "../myths/milkmen.md";
import the_procedure from "../myths/the_procedure.md";
import milk from "../myths/milk-carton-svgrepo-com.svg";
import door from "../myths/door-doorway-svgrepo-com.svg";

type Myth = {
  title: string;
  markdown: string;
  divider: string;
};

export const MYTHS: Record<string, Myth> = {
  milkmen: {
    title: "Milkmen",
    markdown: milkmen,
    divider: milk,
  },
  "the-procedure": {
    title: "The Procedure",
    markdown: the_procedure,
    divider: door,
  },
};
