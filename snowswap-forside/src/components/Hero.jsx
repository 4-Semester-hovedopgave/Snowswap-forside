import Image from "next/image";

export default function Hero() {
    return (
        <section>
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
