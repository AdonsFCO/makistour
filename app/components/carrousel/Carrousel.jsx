import Image from "next/image";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Carrousel() {
  const images = [
    {
      src: "/pics/los_patos.jpg",
      title: "Playa Los Patos",
      description: "Paraíso de arena blanca y aguas cristalinas en Las Terrenas, Samaná. \n  ¡Disfruta de su ambiente familiar y sus tranquilas olas!",
      author: "Angelica Marmolejos",
    },
    {
      src: "/pics/Valeriy Labushkin.jpg",
      title: "Salto El limon ",
      description: "Cascada de 40 metros escondida en la exuberante \n  Samaná, República Dominicana",
      author: "Valeriy Labushkin",
    },
    {
      src: "/pics/Juanca Paulino - El valle.jpg",
      title: "PLaya el Valle",
      description: "Una playa virgen en Samaná con arena blanca, \n aguas cristalinas y un ambiente natural.",
      author: "Juanca Paulino",
    },
  ];

  return (
    <swiper-container
      navigation="false"
      pagination="false"
      effect="fade"
      autoplay-delay="5000"
      autoplay-disable-on-interaction="false"
      space-between="30"
      loop="true"
      
     
      prevent-clicks="false"
    >
      {images.map((image) => {
        return (
          <swiper-slide className={"pt-28"} key={image.title}>
            <div className="overflow-y-hidden overflow-x-visible h-screen relative">
              <Image
                src={image.src}
                alt={image.title}
                className="w-full object-cover relative"
                priority
                loading="eager" 
                fill
                sizes="100vw"
  
  />
              <div className="absolute z-30 bottom-0 lg:right-0 text-white opacity-70 rounded p-1 bg-black">
                <p>Author: {image.author}</p>
              </div>
              <div className="absolute lg:right-4 bottom-1/2 left-4 lg:top-60  text-left lg:left-4">
                <h2 class="text-4xl font-bold text-white  opacity-70 rounded p-1 bg-black lg:w-fit">
                  {image.title.toLocaleUpperCase()}
                </h2>
                <div className="">
                  <h2 class="text-xl font-merriweatherLight text-bostonBlue opacity-70 rounded p-1 bg-black w-fit text-2xl whitespace-pre-line">
                    {image.description}
                  </h2>
                </div>
              </div>
            </div>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
}
