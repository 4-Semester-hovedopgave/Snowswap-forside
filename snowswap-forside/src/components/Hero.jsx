import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <h1 className="text-orange-500 text-2xl">Hero-section</h1>
            <div>
                <Image
                    src="/forside.png"
                    alt="Forside hero"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                />
            </div>
        </section>
    );
}
