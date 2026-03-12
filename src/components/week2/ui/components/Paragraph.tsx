// `Paragraph` dette er en `<p>` seksjon hvor du
// skal ta i mot følgende props: `text` og `textSize`.
// I dette komponentet skal du kunne styre størrelsen
// på teksten ved å sende props til `<p>` taggen sin style attribute.

export function Paragraph({ text, tSize }: { text: string; tSize: string }) {
  return (
    <>
      <div className="paraWrapper">
        <p className="paraText" style={{ fontSize: tSize }}>
          {text}
        </p>
      </div>
    </>
  );
}
