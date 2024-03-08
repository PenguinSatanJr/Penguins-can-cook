export type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image?: string;
  steps?: string[];
};
