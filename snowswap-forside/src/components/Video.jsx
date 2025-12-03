export default function Video() {
    return (
        <section className="w-full p-6 md:p-20 lg:px-32 xl:px-64">
            <video controls className="w-full">
                <source src="/video.mp4" type="video/mp4" />
            </video>
        </section>
    );
} 
