function TestimonialsContainer() {
    return (
        <div className="w-full max-h-[90vh] px-[110px] flex justify-center items-center gap-10 py-[75px] max-[1150px]:px-[50px] max-[830px]:px-[40px] max-[500px]:px-[16px]">
            <div className="w-full flex justify-center items-end gap-10">
                <div className="flex flex-col gap-3 w-[70%]">
                    <h2 className="font-medium text-[calc(3rem+0.8vw)] leading-[110%] tracking-[-0.01em]">Testimonials</h2>
                    <p className="font-medium text-[calc(1.8rem+0.8vw)] leading-[130%] tracking-[-0.01em] max-[1250px]:text-[calc(1.5rem+0.8vw)] max-[950px]:text-[calc(1rem+0.8vw)] max-[680px]:text-[calc(0.7rem+0.8vw)]">“Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”</p>
                </div>
                <div className="w-[20%] flex flex-col items-end">
                    <div>
                        <p className="font-medium text-[calc(0.45rem+0.8vw)] leading-[140%] tracking-[-0.01em]">Chris Ellington</p>
                        <p className="font-medium text-[calc(0.45rem+0.8vw)] leading-[140%] tracking-[-0.01em]">Product Lead,Gatha.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsContainer;