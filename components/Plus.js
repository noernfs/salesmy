import Link from "next/link";
import Image from "next/image";

export default function Feature() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className=" text-2xl lg:text-3xl xl:text-4xl  font-semibold text-black-500">
                        Kenapa harus MyRepublic?
                    </h2>
                    
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <Image
                                className="object-center object-cover h-auto w-full"
                                src="/feature1.webp"
                                width={750}
                                height={450}
                                alt="gratis instalasi"
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">
                                Bebas Biaya Instalasi
                            </p>
                            <p className="text-base text-gray-600 font-normal">
                                Pelayanan bebas biaya tanpa syarat pengambilan
                                paket tertentu
                            </p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <Image
                                className="object-center object-cover h-auto w-full"
                                width={750}
                                height={450}
                                src="/feature3.webp"
                                alt="promo menarik"
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">
                                Promo MyRepublic
                            </p>
                            <p className="text-base text-gray-600 font-normal">
                                Kemudahan berlangganan bagi semua pelanggan
                                setia MyRepublic
                            </p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <Image
                                className="object-center object-cover h-auto w-full"
                                width={750}
                                height={450}
                                src="/feature2.webp"
                                alt="unlimited tanpa fup"
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">
                                Wifi Unlimited
                            </p>
                            <p className="text-base text-gray-600 font-normal">
                                Wifi tanpa FUP untuk pengalaman berselancar
                                Internet tanpa takut kecepatan turun diakhir
                                bulan
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
