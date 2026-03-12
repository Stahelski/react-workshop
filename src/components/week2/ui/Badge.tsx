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
  level: "Success" | "Warning" | "Info";
}) {
  return (
    <>
      <span className={`badgeWrapper${level} badgeWrapper`}>
        <p className="badgeLabel">{label}</p>
      </span>
    </>
  );
}
