// `TextButton` dette er en `<button>` hvor vi kan
// sende tekst til som en prop, du trenger ikke å
// tenke på funksjonalitet, kun styling slik at den ser bra ut.

export function TextButton({text}: {text: string}) {
  return (
    <>
      <div className="textButtonWrapper">
        <button className="textButton">X</button>
        <p className="textButtonPara">{text}</p>
      </div>
    </>
  );
}
