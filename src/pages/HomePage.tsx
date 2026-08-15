import CarCard from '../components/CarCard'

const cars = [
  {
    imageAlt: 'Sedán compacto azul',
    imageUrl: '/images/cars/car-01.jpg',
    name: 'Toyota Corolla LE',
    price: '$18,900',
    year: 2022,
    mileage: '28,000 km',
    transmission: 'Automática',
  },
  {
    imageAlt: 'SUV familiar gris',
    imageUrl: '/images/cars/car-02.jpg',
    name: 'Honda CR-V EX',
    price: '$26,500',
    year: 2021,
    mileage: '41,000 km',
    transmission: 'Automática',
  },
  {
    imageAlt: 'Hatchback deportivo rojo',
    imageUrl: '/images/cars/car-03.jpg',
    name: 'Mazda 3 Hatchback',
    price: '$22,300',
    year: 2023,
    mileage: '14,500 km',
    transmission: 'Manual',
  },
  {
    imageAlt: 'Pickup blanca',
    imageUrl: '/images/cars/car-04.jpg',
    name: 'Ford Ranger XLT',
    price: '$31,200',
    year: 2020,
    mileage: '52,000 km',
    transmission: 'Automática',
  },
  {
    imageAlt: 'Coupé negro',
    imageUrl: '/images/cars/car-05.jpg',
    name: 'Chevrolet Camaro LT',
    price: '$34,900',
    year: 2019,
    mileage: '36,000 km',
    transmission: 'Automática',
  },
  {
    imageAlt: 'Vehículo eléctrico blanco',
    imageUrl: '/images/cars/car-06.jpg',
    name: 'Tesla Model 3',
    price: '$38,700',
    year: 2022,
    mileage: '24,000 km',
    transmission: 'Eléctrica',
  },
  {
    imageAlt: 'SUV premium negro',
    imageUrl: '/images/cars/car-07.jpg',
    name: 'BMW X3 xDrive',
    price: '$42,800',
    year: 2021,
    mileage: '33,000 km',
    transmission: 'Automática',
  },
  {
    imageAlt: 'Sedán ejecutivo plateado',
    imageUrl: '/images/cars/car-08.jpg',
    name: 'Mercedes-Benz C300',
    price: '$39,500',
    year: 2020,
    mileage: '45,000 km',
    transmission: 'Automática',
  },
  {
    imageAlt: 'Jeep todoterreno verde',
    imageUrl: '/images/cars/car-09.jpg',
    name: 'Jeep Wrangler Sport',
    price: '$36,400',
    year: 2021,
    mileage: '30,000 km',
    transmission: 'Manual',
  },
]

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-page__intro">
        <p className="eyebrow">Homepage</p>

        <h1>Encuentra tu próximo coche con Web Cars</h1>

        <p>
          Explora ofertas, compara modelos y guarda tus vehículos favoritos.
          Puedes subir tus imágenes en{' '}
          <strong>public/images/cars</strong> con nombres como{' '}
          <strong>car-01.jpg</strong>, <strong>car-02.jpg</strong> y así
          sucesivamente.
        </p>
      </div>

      <div
        className="cars-grid"
        aria-label="Listado de coches disponibles"
      >
        {cars.map((car) => (
          <CarCard key={car.name} {...car} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
