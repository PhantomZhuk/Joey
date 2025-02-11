function Marquee() {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-black py-2 relative h-[250px] w-full max-[1250px]:h-[200px] max-[950px]:h-[150px] max-[500px]:h-[100px]">
            <div className="w-max animate-[marquee_20s_linear_infinite] text-white text-lg font-semibold h-full flex items-center">
                <span className="pr-8 font-medium text-[calc(7.5rem+0.8vw)] leading-[110%] tracking-[-0.02em] text-center max-[1250px]:text-[calc(6rem+0.8vw)] max-[950px]:text-[calc(5rem+0.8vw)] max-[500px]:text-[calc(3rem+0.8vw)]">Visual design for digital experiences</span>
                <span className="pr-8 font-medium text-[calc(7.5rem+0.8vw)] leading-[110%] tracking-[-0.02em] text-center max-[1250px]:text-[calc(6rem+0.8vw)] max-[950px]:text-[calc(5rem+0.8vw)] max-[500px]:text-[calc(3rem+0.8vw)]">Visual design for digital experiences</span>
                <span className="pr-8 font-medium text-[calc(7.5rem+0.8vw)] leading-[110%] tracking-[-0.02em] text-center max-[1250px]:text-[calc(6rem+0.8vw)] max-[950px]:text-[calc(5rem+0.8vw)] max-[500px]:text-[calc(3rem+0.8vw)]">Visual design for digital experiences</span>
            </div>
        </div>
    );
}

export default Marquee;