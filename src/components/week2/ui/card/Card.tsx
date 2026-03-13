interface CardProducts {
  imageUrl: string;
  imageAltText: string;
  productName: string;
  productDescription: string;
  available: string;
  productNumber: string;
  price: string;
  linkTag: string;
  linkURL: string;
  inStock: boolean;
}

export default function Card(product: CardProducts) {
  return (
    <>
      <a href={product.linkURL} className="cardWrapper">
        <div className="imageContainer">
          <img height={200} src={product.imageUrl} alt={product.imageAltText} />
        </div>

        <div className="infoContainer">
          <p className="produktNavn">{product.productName}</p>
          <p className="produktBeskrivelse">{product.productDescription}</p>
          <p className={product.inStock ? "Tilgjengelig" : "ikkeTilgjengelig"}>
            <div className={product.inStock ? "dott" : "dottNot"}></div>
            {product.inStock ? product.available : "0 på lager"}{" "}
          </p>

          <p className="vareNummer"> {product.productNumber}</p>
        </div>

        <div className="badgeContainer">
          <p className={product.inStock ? "priceTag" : "priseTagNotIn"}>
            {" "}
            {product.price}{" "}
          </p>
        </div>
      </a>
    </>
  );
}
