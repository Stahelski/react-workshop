import { Badge } from "../components/Badge";
import { LinkButton } from "../components/LinkButton";
import { Paragraph } from "../components/Paragraph";

export default function Card() {
  return (
    <>
      <div className="cardWrapper">
        <div className="imageContainer">
          <img
            height={200}
            src="public/products/kontorstol.webp"
            alt="hodetelefoner"
          />
        </div>

        <div className="infoContainer">
          <p className="produktNavn">
            ThunderX3 XTC ergonomisk kontorstol (mesh black)
          </p>
          <p className="produktBeskrivelse">
            Max 125kg, mesh, 3D armlene, klasse 4 gassløfter, justerbar.
          </p>
          <p className="Tilgjengelig">6 på lager</p>
          <p className="vareNummer">Varenummer: 9266650 / Prodnr: SVGCLT3XL</p>
        </div>

        <div className="badgeContainer">
          {" "}
          <Badge label="4 349,-" level="Success" />{" "}
          <LinkButton
            label="Link"
            href="https://www.komplett.no/product/1312475/gaming/gaming-utstyr/gamingstoler/thunderx3-xtc-ergonomisk-kontorstol-mesh-black?queryid=3669cb9e82c82728a35ec103b1e81407&sort=None"
          />{" "}
        </div>
      </div>
    </>
  );
}
