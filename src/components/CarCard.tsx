type CarCardProps = {
  imageAlt: string
  imageUrl: string
  name: string
  price: string
  year: number
  mileage: string
  transmission: string
}

function CarCard({
  imageAlt,
  imageUrl,
  name,
  price,
  year,
  mileage,
  transmission,
}: CarCardProps) {
  return (
    <article className="car-card">
      <div className="car-card__image-wrap">
        <div className="car-card__image-placeholder">Sube la imagen</div>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="car-card__image"
          onError={({ currentTarget }) => {
            currentTarget.style.display = 'none'
          }}
        />
      </div>

      <div className="car-card__body">
        <div>
          <h2>{name}</h2>
          <p className="car-card__price">{price}</p>
        </div>

        <dl className="car-card__details">
          <div>
            <dt>Año</dt>
            <dd>{year}</dd>
          </div>
          <div>
            <dt>Kilometraje</dt>
            <dd>{mileage}</dd>
          </div>
          <div>
            <dt>Transmisión</dt>
            <dd>{transmission}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export default CarCard
