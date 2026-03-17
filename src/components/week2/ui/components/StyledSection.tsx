import { Children } from "react";

export function StyledSection({
  title,
  text,
  background,
  children,
}: {
  title: string;
  text: string;
  background: "dark" | "light";
  children: ReactNode;
}) {
  return (
    <>
      <section className={background === "dark" ? "dark" : "light"}>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </section>
    </>
  );
}

//! LES:
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// https://react.dev/learn/rendering-lists
// https://react.dev/reference/react/Children
