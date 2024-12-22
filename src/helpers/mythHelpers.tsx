import milkmen from "../myths/milkmen.md";
import the_procedure from "../myths/the_procedure.md";

type Myth = {
  title: string;
  markdown: string;
};

export const MYTHS: Record<string, Myth> = {
  milkmen: {
    title: "Milkmen",
    markdown: milkmen,
  },
  "the-procedure": {
    title: "The Procedure",
    markdown: the_procedure,
  },
};
