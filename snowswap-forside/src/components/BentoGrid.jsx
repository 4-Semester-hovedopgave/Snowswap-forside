import Image from "next/image";

export default function BentoGrid() {
    return (
        <section className="
    px-6 
    md:px-20 
    lg:px-32 
    xl:px-64
">
            <h1 className="text-xl md:text-1xl lg:text-2xl xl:text-3xl py-4">
                EXPLORE & SHOP
            </h1>

            <div className="h-auto md:h-screen w-full flex items-center justify-center">
                <div
                    className="grid h-full w-full 
            grid-cols-1 gap-3
            md:grid-cols-4 md:grid-rows-10
        ">


                    <div className="relative md:col-span-4 md:row-span-3 h-40 md:h-auto">
                        <Image
                            src="/explore.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>


                    <div className="relative md:col-span-1 md:row-span-3 h-40 md:h-auto">
                        <Image
                            src="/ski.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>


                    <div className="relative md:col-span-3 md:row-span-3 h-40 md:h-auto">
                        <Image
                            src="/googles.png"
                            alt=""
                            fill
                            className="object-cover object-[center_20%]"
                        />
                    </div>

                    <div className="relative md:col-span-2 md:row-span-4 h-40 md:h-auto">
                        <Image
                            src="/jacket.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>


                    <div className="relative md:col-start-3 md:col-end-5 md:row-span-2 h-40 md:h-auto">
                        <Image
                            src="/midtlayer.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>


                    <div className="relative md:col-start-3 md:col-end-5 md:row-span-2 h-40 md:h-auto">
                        <Image
                            src="/baselayer.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section >
    );
}
