// `Badge` dette skal være et span element som
// kan ta følgende props: `label` og `level`.
// level kan kun være følgende
// verdier: `"success" | "warning" | "info"` og
// bestemmer hvilken farge elementet kan være.

export function Badge({
  label,
  level,
}: {
  label: string;
  level: "success" | "warning" | "info";
}) {
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
      <span className="badgeWrapper">
        <p className="badgeLabel">{label}</p>
        <p className="badgeLevel" style={style}>
          {level}
        </p>
      </span>
    </>
  );
}
