import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                WIFI pilihan keluarga <strong>Indonesia</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              MyRepublic hadir untuk menjadi aset kebanggaan bangsa Indonesia dengan memberikan solusi internet dengan pilihan harga terbaik yang didukung oleh komitmen kami dalam meningkatkan layanan jaringan untuk menghasilkan kualitas layanan internet juara.
              </p>
              <ButtonPrimary>
                  <Link
                      href="https://api.whatsapp.com/send?phone=6281314160043&text=Halo MyRepublic, saya mau bertanya tentang layanan yang tersedia. Terimakasih."
                      className=""
                      target="_blank"
                      rel="noopener"
                    >
                      Hubungi Kami
                    </Link>
              </ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/Illustration1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      
    </div>
  );
};

export default Hero;
