"use client";
import { useEffect, useState } from "react";
import {
  FaCar,
  FaMoneyBillWave,
  FaShieldAlt,
  FaTools,
  FaHandshake,
  FaClock,
  FaRoad,
  FaStar,
  FaMotorcycle,
  FaTruck,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

const featuredCars = [
  {
    id: 4,
    brand: "Audi",
    model: "A4",
    price: 45000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    id: 5,
    brand: "Mercedes",
    model: "C-Class",
    price: 50000,
    fuel: "Gasoline",
    image:
      "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg",
  },
  {
    id: 6,
    brand: "Ford",
    model: "Mustang",
    price: 55000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    id: 7,
    brand: "Chevrolet",
    model: "Camaro",
    price: 52000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    id: 8,
    brand: "Honda",
    model: "Civic",
    price: 28000,
    fuel: "Hybrid",
    image:
      "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg",
  },
  {
    id: 9,
    brand: "Nissan",
    model: "Altima",
    price: 30000,
    fuel: "Gasoline",
    image:
      "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg",
  },
  {
    id: 10,
    brand: "Subaru",
    model: "Outback",
    price: 32000,
    fuel: "Gasoline",
    image:
      "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg",
  },
  {
    id: 11,
    brand: "Volkswagen",
    model: "Golf",
    price: 27000,
    fuel: "Gasoline",
    image:
      "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg",
  },
  {
    id: 12,
    brand: "Hyundai",
    model: "Elantra",
    price: 26000,
    fuel: "Hybrid",
    image:
      "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg",
  },
  {
    id: 13,
    brand: "Mazda",
    model: "CX-5",
    price: 35000,
    fuel: "Gasoline",
    image:
      "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg",
  },
  {
    id: 14,
    brand: "Mazda",
    model: "CX-5",
    price: 35000,
    fuel: "Gasoline",
    image:
      "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2025/oem/2025_mercedes-benz_sl-class_convertible_amg-sl-43_fq_oem_1_1600.jpg",
  },
  {
    id: 15,
    brand: "Mazda",
    model: "CX-5",
    price: 35000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    id: 16,
    brand: "Mazda",
    model: "CX-5",
    price: 35000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    id: 17,
    brand: "Mazda",
    model: "CX-5",
    price: 35000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    id: 18,
    brand: "Mazda",
    model: "CX-5",
    price: 35000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    id: 19,
    brand: "Mazda",
    model: "CX-5",
    price: 35000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    id: 20,
    brand: "Mazda",
    model: "CX-5",
    price: 35000,
    fuel: "Gasoline",
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
];

const advantages = [
  {
    icon: <FaCar size={40} />,
    title: "Gran variedad de autos",
    description:
      "Encuentra el auto perfecto para ti entre cientos de opciones disponibles.",
  },
  {
    icon: <FaMoneyBillWave size={40} />,
    title: "Precios competitivos",
    description:
      "Los mejores precios del mercado con ofertas y descuentos exclusivos.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Seguridad garantizada",
    description:
      "Compra con confianza, todos los autos pasan por inspecciones rigurosas.",
  },
  {
    icon: <FaTools size={40} />,
    title: "Mantenimiento asegurado",
    description:
      "Te ofrecemos vehículos en excelente estado con historial de mantenimiento.",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Trámites simplificados",
    description:
      "Nos encargamos del papeleo para que tu compra sea rápida y sencilla.",
  },
  {
    icon: <FaClock size={40} />,
    title: "Disponibilidad 24/7",
    description:
      "Explora y compra tu auto cuando quieras, sin restricciones de horario.",
  },
];

const categories = [
  {
    name: "SUVs",
    count: 120,
    image:
      "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
  },
  {
    name: "Deportivos",
    count: 85,
    image: "https://pngimg.com/d/porsche_PNG10622.png",
  },
  {
    name: "Sedan",
    count: 150,
    image: "https://grupopana.com.pe/hubfs/2-2.png",
  },
  {
    name: "Pick Up",
    count: 95,
    image: "https://pnghunter.com/get-logo.php?id=7091",
  },
  {
    name: "Vans",
    count: 60,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-uYLkutVXDMslAepo-sB90a4iTuUHi9lQQ&s",
  },
  {
    name: "Hatchback",
    count: 110,
    image:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fmercedes-amg%2Fa-45%2Fmercedes-amg-a-45-polar-white.png%3Fv%3D1637664261&w=640&q=75",
  },
];

const carTypes = [
  {
    icon: <FaCar size={40} className="text-orange-500" />,
    title: "Usados",
    description:
      "Autos de segunda vendidos por sus dueños o vendedores independientes.",
    link: "#",
  },
  {
    icon: <FaRoad size={40} className="text-orange-500" />,
    title: "Seminuevos",
    description:
      "Autos de segunda revisados y reacondicionados por concesionarios.",
    link: "#",
  },
  {
    icon: <FaStar size={40} className="text-orange-500" />,
    title: "Nuevos 0km",
    description:
      "Tenemos tiendas oficiales de más de 20 concesionarios y marcas.",
    link: "#",
  },
];


interface Car {
  title: string;
  year: number;
  price: number;
  creditPrice?: string;
  imageUrl: string;
  dealership: string;
  mileage?: string;
  transmission?: string;
  fuel?: string;
  condition: string;
}

const cars: Car[] = [
  {
    title: 'Volvo Xc-60',
    year: 2019,
    condition: 'De lujo',
    price: 30990,
    creditPrice: '$933/mes',
    imageUrl:  "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
    dealership: 'Mitsui',
    mileage: '50,650km',
    transmission: 'Automática',
    fuel: 'Gasolina',
  },
  {
    title: 'Volvo Xc-60',
    year: 2019,
    condition: 'De lujo',
    price: 30990,
    creditPrice: '$933/mes',
    imageUrl:  "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
    dealership: 'Mitsui',
    mileage: '50,650km',
    transmission: 'Automática',
    fuel: 'Gasolina',
  },
  {
    title: 'Volvo Xc-60',
    year: 2019,
    condition: 'De lujo',
    price: 30990,
    creditPrice: '$933/mes',
    imageUrl:  "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
    dealership: 'Mitsui',
    mileage: '50,650km',
    transmission: 'Automática',
    fuel: 'Gasolina',
  },
  {
    title: 'Volvo Xc-60',
    year: 2019,
    condition: 'De lujo',
    price: 30990,
    creditPrice: '$933/mes',
    imageUrl:  "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
    dealership: 'Mitsui',
    mileage: '50,650km',
    transmission: 'Automática',
    fuel: 'Gasolina',
  },
  {
    title: 'Volvo Xc-60',
    year: 2019,
    condition: 'De lujo',
    price: 30990,
    creditPrice: '$933/mes',
    imageUrl:  "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
    dealership: 'Mitsui',
    mileage: '50,650km',
    transmission: 'Automática',
    fuel: 'Gasolina',
  },
  {
    title: 'Volvo Xc-60',
    year: 2019,
    condition: 'De lujo',
    price: 30990,
    creditPrice: '$933/mes',
    imageUrl:  "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
    dealership: 'Mitsui',
    mileage: '50,650km',
    transmission: 'Automática',
    fuel: 'Gasolina',
  },
  {
    title: 'Volvo Xc-60',
    year: 2019,
    condition: 'De lujo',
    price: 30990,
    creditPrice: '$933/mes',
    imageUrl:  "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
    dealership: 'Mitsui',
    mileage: '50,650km',
    transmission: 'Automática',
    fuel: 'Gasolina',
  },
  {
    title: 'Volvo Xc-60',
    year: 2019,
    condition: 'De lujo',
    price: 30990,
    creditPrice: '$933/mes',
    imageUrl:  "https://www.bmw.es/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
    dealership: 'Mitsui',
    mileage: '50,650km',
    transmission: 'Automática',
    fuel: 'Gasolina',
  },
  // Add 7 more car objects here...
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl text-black font-bold">AutoMarket</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Catálogo
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contacto
          </a>
        </li>
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCars, setVisibleCars] = useState(1);
  const [vehicleType, setVehicleType] = useState("Autos");
  const [brand, setBrand] = useState("Todas las marcas");
  const [model, setModel] = useState("Todos los modelos");
  const [verifiedOnly, setVerifiedOnly] = useState(false);


  const [currentIndexSwipper, setCurrentIndexSwipper] = useState(0);

  const prevSlide = () => {
    setCurrentIndexSwipper((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndexSwipper((prev) => (prev === cars.length - 1 ? 0 : prev + 1));
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (featuredCars.length - visibleCars + 1)
    );
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (featuredCars.length - visibleCars + 1)) %
        (featuredCars.length - visibleCars + 1)
    );
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="text-center py-12 bg-gray-100 rounded-lg mb-6">
        <h1 className="text-4xl text-black font-bold">AutoMarket</h1>
        <p className="text-gray-600 mt-2">
          Tu auto ideal, con confianza y seguridad.
        </p>
      </div>
      <div className="p-6 max-w-6xl mx-auto bg-white">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <div className="flex justify-center border-b pb-2 mb-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 ${
                vehicleType === "Autos"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setVehicleType("Autos")}
            >
              <FaCar /> Autos
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 ${
                vehicleType === "Motos"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setVehicleType("Motos")}
            >
              <FaMotorcycle /> Motos
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 ${
                vehicleType === "Camiones"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setVehicleType("Camiones")}
            >
              <FaTruck /> Camiones
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <select
              className="border p-2 rounded w-full"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option>Tipo de vehiculo</option>
              <option>Todos</option>
              <option>Usados</option>
              <option>Seminuevos</option>
              <option>Nuevos</option>
            </select>

            <select
              className="border p-2 rounded w-full"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option>Todas las marcas</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Ford</option>
            </select>

            <select
              className="border p-2 rounded w-full"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option>Todos los modelos</option>
              <option>Modelo A</option>
              <option>Modelo B</option>
            </select>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              id="verifiedOnly"
              className="w-5 h-5"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
            />
            <label htmlFor="verifiedOnly" className="text-gray-600 font-medium">
              Mostrar solo autos verificados
            </label>
          </div>

          <button className="bg-red-500 text-white py-2 px-6 rounded-lg w-full font-bold hover:bg-orange-600">
            Ver vehículos disponibles
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 "
            >
              <div className="text-blue-600 mb-4">{adv.icon}</div>
              <h2 className="text-xl font-semibold text-black">{adv.title}</h2>
              <p className="text-gray-600 mt-2">{adv.description}</p>
            </div>
          ))}
        </div>

 
        <div className="my-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Categorías destacadas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="boverflow-hidden ">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-[20px]"
                />

                <div className="p-4 text-center">
                  <h3 className="text-xl text-black font-semibold">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.count} vehículos</p>
                </div>
              </div>
            ))}
          </div>
        </div>

  

        <div className="my-12 bg-gray-200 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            ¿Tienes un vehículo para vender?
          </h2>
          <p className="text-gray-700 mb-6">
            Véndelo en menos de 1 semana y con seguridad a través de NeoAuto
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-black-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Quiero vender mi propio auto
              </h3>
              <a href="#" className="text-blue-600 font-semibold">
                Conocer más
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-black-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Soy concesionario o revendedor
              </h3>
              <a href="#" className="text-blue-600 font-semibold">
                Conocer más
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="relative w-full max-w-6xl mx-auto">
          <div className="hidden md:flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-lg"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-lg"
            >
              <FaArrowRight />
            </button>
          </div>
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {cars.map((car, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <img
                    src={car.imageUrl}
                    alt={car.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <span className="bg-gray-200 text-gray-800 text-xs font-bold px-2 py-1 rounded">
                      {car.condition}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">
                      {car.title} {car.year}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {car.mileage} • {car.transmission} • {car.fuel}
                    </p>
                    <p className="text-lg font-bold mt-2">
                      ${car.price.toLocaleString()}
                    </p>
                    {car.creditPrice && (
                      <p className="text-sm text-red-600">
                        Con Crédito: {car.creditPrice}
                      </p>
                    )}
                    <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800">
                      Ver detalle
                    </button>
                    <p className="text-xs text-gray-400 mt-2">
                      Vehículo de: {car.dealership}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg font-semibold">
            Mostrar todos los vehículos
          </button>
        </div>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            El auto de tus sueños, al precio que buscas
          </h2>
          <p className="text-gray-600 mt-2">
            Conoce todos los tipos de auto que puedes encontrar en AutoMarket
          </p>
          <div className="mt-6 space-y-6">
            {carTypes.map((car, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">{car.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {car.title}
                  </h3>
                  <p className="text-gray-600">{car.description}</p>
                  <a
                    href={car.link}
                    className="text-blue-600 font-semibold mt-1 block"
                  >
                    Ver {car.title.toLowerCase()} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="https://cde.neoauto.pe/content/site/vehicle_dream_sect_1.webp?ver=1739315324197"
            alt="Auto deportivo"
            className="rounded-lg shadow-md w-full h-auto md:col-span-2"
          />
          <img
            src="https://cde.neoauto.pe/content/site/vehicle_dream_sect_2.webp?ver=1739315324197"
            alt="Auto deportivo"
            className="rounded-lg shadow-md w-full h-auto md:col-span-2"
          />
          {/* <img src="/images/person1.jpg" alt="Persona con scooter" className="rounded-lg shadow-md w-full h-auto" /> */}
          {/* <img src="/images/person2.jpg" alt="Persona usando teléfono" className="rounded-lg shadow-md w-full h-auto" /> */}
        </div>
      </section>

      <Footer />
    </>
  );
}
