"use client";

import HomeLayout from "./HomeLayout";
import NoLayout from "./NoLayout";


export const Layouts = {
  Login: NoLayout,
  Home: HomeLayout,
};

export type LayoutKeys = keyof typeof Layouts;