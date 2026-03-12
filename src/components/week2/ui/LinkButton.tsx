// `LinkButton` dette er en `<a>` hvor vi skal
// ta i mot følgende props: `label` og `href`.
// Ligg på styling slik at dette også ser ut som
// en knapp, f.eks border

export function LinkButton({ label, href }: { label: string; href: string }) {
  return (
    <>
      <a className="linkButton" href={href}>
        {label}
      </a>
    </>
  );
}
