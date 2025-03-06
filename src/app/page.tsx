"use client"
import { useEffect, useState } from "react";
import { FaCar, FaMoneyBillWave, FaShieldAlt, FaTools, FaHandshake, FaClock, FaRoad, FaStar } from "react-icons/fa";


const featuredCars = [
  { id: 4, brand: "Audi", model: "A4", price: 45000, fuel: "Gasoline",image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg"},
  { id: 5, brand: "Mercedes", model: "C-Class", price: 50000, fuel: "Gasoline", image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg"},
  { id: 6, brand: "Ford", model: "Mustang", price: 55000, fuel: "Gasoline", image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg"},
  { id: 7, brand: "Chevrolet", model: "Camaro", price: 52000, fuel: "Gasoline", image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
  { id: 8, brand: "Honda", model: "Civic", price: 28000, fuel: "Hybrid", image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { id: 9, brand: "Nissan", model: "Altima", price: 30000, fuel: "Gasoline", image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { id: 10, brand: "Subaru", model: "Outback", price: 32000, fuel: "Gasoline", image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { id: 11, brand: "Volkswagen", model: "Golf", price: 27000, fuel: "Gasoline", image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { id: 12, brand: "Hyundai", model: "Elantra", price: 26000, fuel: "Hybrid",image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { id: 13, brand: "Mazda", model: "CX-5", price: 35000, fuel: "Gasoline", image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { id: 14, brand: "Mazda", model: "CX-5", price: 35000, fuel: "Gasoline", image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { id: 15, brand: "Mazda", model: "CX-5", price: 35000, fuel: "Gasoline", image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
  { id: 16, brand: "Mazda", model: "CX-5", price: 35000, fuel: "Gasoline", image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
  { id: 17, brand: "Mazda", model: "CX-5", price: 35000, fuel: "Gasoline", image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
  { id: 18, brand: "Mazda", model: "CX-5", price: 35000, fuel: "Gasoline", image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
  { id: 19, brand: "Mazda", model: "CX-5", price: 35000, fuel: "Gasoline", image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
  { id: 20, brand: "Mazda", model: "CX-5", price: 35000, fuel: "Gasoline", image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
];

const advantages = [
  { icon: <FaCar size={40} />, title: "Gran variedad de autos", description: "Encuentra el auto perfecto para ti entre cientos de opciones disponibles." },
  { icon: <FaMoneyBillWave size={40} />, title: "Precios competitivos", description: "Los mejores precios del mercado con ofertas y descuentos exclusivos." },
  { icon: <FaShieldAlt size={40} />, title: "Seguridad garantizada", description: "Compra con confianza, todos los autos pasan por inspecciones rigurosas." },
  { icon: <FaTools size={40} />, title: "Mantenimiento asegurado", description: "Te ofrecemos vehículos en excelente estado con historial de mantenimiento." },
  { icon: <FaHandshake size={40} />, title: "Trámites simplificados", description: "Nos encargamos del papeleo para que tu compra sea rápida y sencilla." },
  { icon: <FaClock size={40} />, title: "Disponibilidad 24/7", description: "Explora y compra tu auto cuando quieras, sin restricciones de horario." },
];

const categories = [
  { name: "SUVs", count: 120, image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { name: "Deportivos", count: 85, image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { name: "Sedan", count: 150, image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { name: "Pick Up", count: 95, image: "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg" },
  { name: "Vans", count: 60, image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
  { name: "Hatchback", count: 110, image: "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg" },
];


const carTypes = [
  { icon: <FaCar size={40} className="text-orange-500" />, title: "Usados", description: "Autos de segunda vendidos por sus dueños o vendedores independientes.", link: "#" },
  { icon: <FaRoad size={40} className="text-orange-500" />, title: "Seminuevos", description: "Autos de segunda revisados y reacondicionados por concesionarios.", link: "#" },
  { icon: <FaStar size={40} className="text-orange-500" />, title: "Nuevos 0km", description: "Tenemos tiendas oficiales de más de 20 concesionarios y marcas.", link: "#" },
];


const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl text-black font-bold">AutoMarket</h1>
      <ul className="flex gap-6">
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Inicio</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Catálogo</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Contacto</a></li>
      </ul>
    </nav>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-red-500">AutoMarket</h2>
        </div>
        <div>
          <h3 className="text-lg text-black font-semibold">Usados</h3>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li className="cursor-pointer">Autos</li>
            <li className="cursor-pointer">Motos</li>
            <li className="cursor-pointer">Camiones</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-black  font-semibold">Nuevos</h3>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li className="cursor-pointer">Autos</li>
            <li className="cursor-pointer">Camiones</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-black  font-semibold">Ayuda</h3>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li className="cursor-pointer">Términos y condiciones</li>
            <li className="cursor-pointer">Políticas de publicación</li>
            <li className="cursor-pointer">Política de privacidad</li>
            <li className="cursor-pointer">Política de cookies</li>
            <li className="cursor-pointer">Legales</li>
            <li className="cursor-pointer">Libro de reclamaciones 📖</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm mt-6">
        © 2024 AutoMarket SAC. Todos los derechos reservados
      </div>
    </footer>
  );
};

export default function Home() {
  const [brandFilter, setBrandFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCars, setVisibleCars] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (featuredCars.length - visibleCars + 1));
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (featuredCars.length - visibleCars + 1)) % (featuredCars.length - visibleCars + 1));
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="text-center py-12 bg-gray-100 rounded-lg mb-6">
        <h1 className="text-4xl text-black font-bold">AutoMarket</h1>
        <p className="text-gray-600 mt-2">Tu auto ideal, con confianza y seguridad.</p>
      </div>
    <div className="p-6 max-w-6xl mx-auto">

      
      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select onChange={(e) => setBrandFilter(e.target.value)} className="p-2 border rounded">
          <option value="">All Brands</option>
          <option value="Tesla">Tesla</option>
          <option value="BMW">BMW</option>
          <option value="Toyota">Toyota</option>
        </select>
        
        <select onChange={(e) => setFuelFilter(e.target.value)} className="p-2 border rounded">
          <option value="">All Fuel Types</option>
          <option value="Electric">Electric</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredCars.slice(0,6).map((car) => (
          <div key={car.id} className="p-4 border rounded-lg shadow-lg">
            <img src={car.image} alt={car.model} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{car.brand} {car.model}</h2>
            <p className="text-gray-600">${car.price.toLocaleString()}</p>
          </div>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
        {advantages.map((adv, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6  shadow-md">
            <div className="text-blue-600 mb-4">{adv.icon}</div>
            <h2 className="text-xl font-semibold">{adv.title}</h2>
            <p className="text-gray-600 mt-2">{adv.description}</p>
          </div>
        ))}
      </div>
      
      {/* Featured Cars Carousel */}
      <div className="relative mt-12 overflow-hidden">
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded" style={{position: 'absolute', zIndex: 100}}>◀</button>
        <div className="flex transition-transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {featuredCars.slice(currentIndex, currentIndex + visibleCars).map((car) => (
            <div key={car.id} className={`min-w-full sm:min-w-1/${visibleCars} p-4 border rounded-lg shadow-lg`}>
              <img src={car.image} alt={car.model} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-2">{car.brand} {car.model}</h2>
              <p className="text-gray-600">${car.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded">▶</button>
      </div>


      <div className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Categorías destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md">
              <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-600">{category.count} vehículos</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="my-12 bg-gray-200 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">¿Tienes un vehículo para vender?</h2>
        <p className="text-gray-700 mb-6">Véndelo en menos de 1 semana y con seguridad a través de NeoAuto</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Quiero vender mi propio auto</h3>
            <a href="#" className="text-blue-600 font-semibold">Conocer más</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Soy concesionario o revendedor</h3>
            <a href="#" className="text-blue-600 font-semibold">Conocer más</a>
          </div>
        </div>
      </div>
    </div>
      


    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
      {/* Text Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900">El auto de tus sueños, al precio que buscas</h2>
        <p className="text-gray-600 mt-2">Conoce todos los tipos de auto que puedes encontrar en AutoMarket</p>
        <div className="mt-6 space-y-6">
          {carTypes.map((car, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">{car.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{car.title}</h3>
                <p className="text-gray-600">{car.description}</p>
                <a href={car.link} className="text-blue-600 font-semibold mt-1 block">Ver {car.title.toLowerCase()} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="https://cde.neoauto.pe/content/site/vehicle_dream_sect_1.webp?ver=1739315324197" alt="Auto deportivo" className="rounded-lg shadow-md w-full h-auto md:col-span-2" />
        <img 
        src='https://cde.neoauto.pe/content/site/vehicle_dream_sect_2.webp?ver=1739315324197'
 alt="Auto deportivo" className="rounded-lg shadow-md w-full h-auto md:col-span-2" />
        {/* <img src="/images/person1.jpg" alt="Persona con scooter" className="rounded-lg shadow-md w-full h-auto" /> */}
        {/* <img src="/images/person2.jpg" alt="Persona usando teléfono" className="rounded-lg shadow-md w-full h-auto" /> */}
      </div>
    </section>

    <Footer />
    </>
  );
}
