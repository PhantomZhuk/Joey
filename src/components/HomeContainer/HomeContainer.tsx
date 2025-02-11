import Header from "../../layouts/Header/Header";

function HomeContainer() {
    return (
        <div className="w-full min-h-screen flex flex-col px-[110px] justify-between">
            <Header />
            <div className="w-full h-[50vh] flex justify-end items-end">
                <h1 className="font-medium text-[235px] leading-[90%] tracking-[-0.02em]">Websites&
                    Branding</h1>
                <button className="absolute font-medium text-[20px] leading-[140%] tracking-[-0.01em] rounded-[144px] p-[32px] w-[231px] h-[92px] flex gap-2 items-center cursor-pointer bg-[#f9f9f9]">SCROLL DOWN
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_530)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02722 13.1657C7.3145 12.8537 7.66169 12.4914 8.05373 12.1103C9.1898 11.0057 10.745 9.70094 12.335 9.03846L12.7196 9.96154C11.3095 10.5491 9.86474 11.7443 8.75081 12.8272C8.1993 13.3634 7.73931 13.8617 7.41747 14.2257C7.25668 14.4076 7.13071 14.5555 7.04541 14.6574C7.00277 14.7083 6.97032 14.7477 6.94878 14.7741L6.92477 14.8036L6.91909 14.8106L6.91785 14.8122L6.52727 15.3004L6.1369 14.8124L6.13545 14.8106L6.12976 14.8036L6.10575 14.7741C6.08422 14.7477 6.05177 14.7083 6.00912 14.6574C5.92383 14.5555 5.79786 14.4076 5.63707 14.2257C5.31523 13.8617 4.85524 13.3634 4.30373 12.8272C3.1898 11.7443 1.74502 10.5491 0.334961 9.96154L0.719576 9.03846C2.30951 9.70094 3.86474 11.0057 5.00081 12.1103C5.39281 12.4914 5.73996 12.8537 6.02722 13.1656V0.5H7.02722V13.1657Z" fill="black" stroke="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_530">
                                <rect width="13" height="15" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg></button>
            </div>
            <div className="w-full h-[20vh] flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <p className="font-medium tetx-[24px] leading-[130%] tracking-[-0.01em]">Let’s Talk</p>
                    <p className="font-medium tetx-[20px] leading-[140%] tracking-[-0.01em]">hello@joey.co</p>
                </div>

                <p className="w-[370px] font-medium tetx-[20px] leading-[140%] tracking-[-0.01em]">Hello, I'm Joey, an online product designer focusing on brand identity, advertising, and no-code instruments.</p>
            </div>
        </div>
    );
}

export default HomeContainer;