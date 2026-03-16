interface CardProducts {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  inStock: boolean;
  isOnSale: boolean;
  linkURL: string;
  productNumber: string;
  available: string;
  productDescription: string;
}

export default function ProductList(info: CardProducts) {
  <>
    <a href={info.linkURL} key={info.name} className="cardWrapper">
      <div className="imageContainer">
        <img height={200} src={info.imageUrl} alt={info.name} />
      </div>

      <div className="infoContainer">
        <p className="produktNavn">{info.name}</p>
        <p className="produktBeskrivelse">{info.description}</p>
        <p className={info.inStock ? "Tilgjengelig" : "ikkeTilgjengelig"}>
          <div className={info.inStock ? "dott" : "dottNot"}></div>
          {info.inStock ? info.available : "0 på lager"}{" "}
        </p>

        <p className="vareNummer"> {info.productNumber}</p>
      </div>

      <div className="badgeContainer">
        <p className={info.inStock ? "priceTag" : "priseTagNotIn"}>
          {" "}
          {info.price},-{" "}
        </p>
      </div>
    </a>
  </>;
}
