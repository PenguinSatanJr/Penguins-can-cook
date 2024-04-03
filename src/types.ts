export type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image?: string;
  steps?: string[];
};

export enum WeekDay {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export enum MealTime {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
}

export type Menu = {
  mealTime: MealTime;
  recipes: Recipe[];
}[];
