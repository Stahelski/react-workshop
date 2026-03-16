import { Children } from "react";

interface SectionProps {
  title: string;
  text: string;
  background: "light" | "dark";
  children: ReactNode; // ReactNode = alle typer innhold React kan rendre
}

export function StyledSection(items: SectionProps) {
  return <>{items.children}</>;
}

//! LES:
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// https://react.dev/learn/rendering-lists
// https://react.dev/reference/react/Children
