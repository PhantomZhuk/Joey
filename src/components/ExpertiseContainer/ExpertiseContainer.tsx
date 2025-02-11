import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";

function ExpertiseContainer() {

    const expertises = [
        {
            id: 1,
            title: "Branding",
            description: "Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept."
        },
        {
            id: 2,
            title: "UI Design",
            description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
        },
        {
            id: 3,
            title: "UX Design",
            description: "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements."
        },
        {
            id: 4,
            title: "Development",
            description: "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites."
        },
    ]

    return (
        <div className="w-full max-h-[90vh] px-[110px] py-[50px] flex flex-col gap-10 max-[1150px]:px-[50px] max-[830px]:px-[40px] max-[680px]:gap-5 max-[500px]:px-[16px]">
            <h2 className="font-medium text-[calc(1.8rem+0.8vw)] leading-[120%] tracking-[-0.01em]">Expertise</h2>
            <div className="flex flex-wrap gap-10 justify-between mt-[50px] max-[680px]:mt-[20px]">
                {expertises.map((expertise) => (
                    <ExpertiseCard key={expertise.id} title={expertise.title} description={expertise.description} />
                ))}
            </div>
        </div>
    );
}

export default ExpertiseContainer;