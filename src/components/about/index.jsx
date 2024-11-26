import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Zineb EL GHILANI
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Passionnée par l'univers du design et de la création visuelle, je suis une Motion Designer et Infographiste expérimentée spécialisée dans la conception de contenus dynamiques et innovants. Avec une maîtrise approfondie des outils phares tels qu'Adobe After Effects, Premiere Pro, Illustrator, Photoshop, InDesign et XD, je donne vie à vos idées à travers des animations captivantes, des designs élégants et des expériences visuelles mémorables.

Mon expertise s'étend du motion design pour des vidéos promotionnelles, publicités, ou vidéos explicatives, à la création graphique pour des supports print et digitaux : logos, affiches, brochures, interfaces utilisateur, et plus encore. Mon objectif est de combiner créativité et technicité pour offrir des solutions uniques qui captivent et inspirent.

Que ce soit pour raconter une histoire en mouvement ou concevoir une identité visuelle percutante, je m'engage à transformer vos projets en œuvres d'art visuelles qui reflètent vos valeurs et vos ambitions.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            55+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        

        
      </div>
    </section>
  );
};

export default AboutDetails;
