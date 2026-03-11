export function Badge(label: string, level: "success" | "warning" | "info") {
  let style = {};

  if (level === "success") {
    style = { color: "green" };
  } else if (level === "warning") {
    style = { color: "red" };
  } else {
    style = { color: "white" };
  }

  return (
    <>
      <span>
        <p>{label}</p>
        <p style={style}>{level}</p>
      </span>
    </>
  );
}
