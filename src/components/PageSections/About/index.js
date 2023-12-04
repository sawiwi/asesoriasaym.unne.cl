import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import { ImgDataMe } from '../../../data/dataUser';



// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3  gap-1">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-6">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className="col-span-2 xl:col-span-1 flex flex-col">
              {ImgDataMe?.length > 0 ? ImgDataMe.map((item)=>
                <div key={item.id}>
                  <img
                  src={item.img}
                  alt="about-img"
                  className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2 object-cover"
                />
              </div>)
            :null}
          </div>
          <div className="col-span-2 xl:col-span-1 flex flex-col">
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1  xl:text-left">
            Con más de una década de experiencia, hemos brindado asesoramiento especializado a beneficiarios del Subsidio DS1 en la adquisición de propiedades usadas, gestionando integralmente el proceso de compraventa. Esto incluye desde la tasación inicial hasta el estudio exhaustivo de títulos, la redacción de escrituras de compraventa y la gestión de la inscripción en el Conservador de Bienes Raíces. Además, nos encargamos de coordinar los pagos correspondientes al vendedor, asegurando así una gestión completa y efectiva del proceso de transacción inmobiliaria
              <br />
              <br />
              <ul className='list-disc'>
                <li className='mb-1'>Corretaje de propiedades con subsidio y sin subsidio. </li>
                <li className='mb-2'>Gestionamos crédito hipotecario con Banco estado o mutuaria para subsidio ds1. </li>
                <li className='mb-1'>Realizamos tasaciones SERVIU ( registrados y autorizados ). </li>
              </ul>
              {/* Unne es un acelerador inmobiliario que ofrece una amplia gama de productos y servicios innovadores, esto junto con una gestión comercial proactiva, impulsarán los resultados de nuestros clientes.
              <br />
              <br /> */}
            </p>

            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
              Asesoria A & M.
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 xl:text-left">
              Fundador y Gerente General.
            </p>
          </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
