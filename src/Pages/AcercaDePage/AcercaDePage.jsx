import React from 'react'
import "./AcercaDePage.css"

// assets
import pccomponents from "./acercade-assets/pc-components.jpg";
import atencion from "./acercade-assets/atencion.jpg";

const AcercaDePage = () => {
  return (
    <>
      <h1 className='title'>Acerca De</h1>
      <p className='acercade-left'>FullTech es una página dedicada a la venta de elementos de computadoras y accesorios tecnológicos. Es reconocida por ofrecer una amplia variedad de productos de alta calidad y por ser una opción confiable para aquellos que buscan mejorar su experiencia informática.</p>
      <p className='acercade-left'>Uno de los aspectos destacados de FullTech es su extenso catálogo de productos. La tienda en línea cuenta con una amplia gama de elementos de computadoras, como procesadores, tarjetas gráficas, memorias RAM, discos duros, fuentes de alimentación, tarjetas madre y periféricos, entre otros.</p>
      <img src={pccomponents} alt="image1" className='image-size position-right'/>
      <p className='acercade-right'>La página se destaca por trabajar con reconocidas marcas del mercado, lo que garantiza la calidad y la confiabilidad de los productos. Los clientes pueden encontrar marcas líderes en tecnología como Intel, AMD, NVIDIA, Asus, Gigabyte, Corsair, Kingston, entre otras.</p>
      <p className='acercade-right'>FullTech se esfuerza por brindar una experiencia de compra cómoda y segura. Nos preocupamos por brindar un excelente servicio, ofreciendo asesoramiento personalizado y resolviendo cualquier duda o inquietud que los clientes puedan tener. También contamos con un servicio de atención al cliente por teléfono o correo electrónico, lo que garantiza una comunicación eficiente y una respuesta rápida ante cualquier problema.</p>
      <img src={atencion} alt="image2" className='image-size image-left' />
      <p className='acercade-center'>Por último, FullTech se compromete con la satisfacción del cliente y ofrece políticas de devolución y garantía claras. Esto proporciona tranquilidad a los compradores, ya que saben que pueden contar con el respaldo de la empresa en caso de cualquier inconveniente con su compra.</p>
    </>
  )
}

export default AcercaDePage;
