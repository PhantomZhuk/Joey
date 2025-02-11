function Marquee() {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-black py-2 relative h-[250px] w-full">
            <div className="w-max animate-[marquee_20s_linear_infinite] text-white text-lg font-semibold h-full flex items-center">
                <span className="pr-8 font-medium text-[140px] leading-[110%] tracking-[-0.02em] text-center">Visual design for digital experiences</span>
                <span className="pr-8 font-medium text-[140px] leading-[110%] tracking-[-0.02em] text-center">Visual design for digital experiences</span>
                <span className="pr-8 font-medium text-[140px] leading-[110%] tracking-[-0.02em] text-center">Visual design for digital experiences</span>
            </div>
        </div>
    );
}

export default Marquee;