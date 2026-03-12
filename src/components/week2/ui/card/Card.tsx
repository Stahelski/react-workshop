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
}

export default function Card(product: CardProducts) {
  return (
    <>
      <div className="cardWrapper">
        <div className="imageContainer">
          <img height={200} src={product.imageUrl} alt={product.imageAltText} />
        </div>

        <div className="infoContainer">
          <p className="produktNavn">{product.productName}</p>
          <p className="produktBeskrivelse">{product.productDescription}</p>
          <p className="Tilgjengelig"> {product.available} </p>
          <p className="vareNummer"> {product.productNumber}</p>
        </div>

        <div className="badgeContainer">
          <p className="priceTag"> {product.price} </p>
          <a href={product.linkURL} className="linkTag">
            {product.linkTag}
          </a>
        </div>
      </div>
    </>
  );
}
