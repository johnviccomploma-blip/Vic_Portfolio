import CardSample from "@/components/custom-ui/card-sample";

export default function ProjectSection() {
    const cards = [
        {
            title: "3D PROJECTS",
            description:
                "High-quality 3D modeling, rigging, texturing, and animation for films",
            image: "/images/3d-project.png",
        },
        {
            title: "2D PROJECTS",
            description:
                "Creative concept art, illustration, and 2D animation for digital media and promotional content.",
            image: "/images/2d-project.png",
        },
        {
            title: "FILM PROJECTS",
            description:
                "Visual storytelling in animation.",
            image: "/images/cg-project.png",
        },
        {
            title: "ANOTHER PROJECT",
            description: "Example of future projects added here.",
            image: "/images/cg-project.png",
        },
        // Add more cards here
    ];

    return (
        <section className="w-full py-10 bg-gradient-to-b from-rose-300 to-white flex justify-center">
            <div className="w-full max-w-8xl grid grid-cols-1 sm:grid-cols-3 gap-5 px-3 pl-10 pr-10">
                {cards.map((card, index) => (
                    <CardSample
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                    />
                ))}
            </div>
        </section>
    );
}
