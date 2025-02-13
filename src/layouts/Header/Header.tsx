import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const location = useLocation();
    const getActiveIndex = (path: string) => {
        const routes: { [key: string]: number } = {
            "/home": 1,
            "/projects": 2,
            "/about": 3,
            "/contact": 4,
        };
        return routes[path] || -1;
    };
    const [active, setActive] = useState(getActiveIndex(location.pathname));
    const [defaultActive] = useState(getActiveIndex(location.pathname));

    const navItems = [
        { name: "Home", path: "/home" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <div className="w-full h-[20vh] flex flex-col items-center py-5 max-[600px]:h-[15vh] max-[600px]:flex-row max-[600px]:justify-between px-[110px] max-[1150px]:px-[50px] max-[830px]:px-[40px] max-[500px]:px-[16px]">
            <div className={`w-full h-screen absolute bg-black left-0 top-0 z-[100] ${isOpen ? "block" : "hidden"}`}>
                <div className="w-full h-10vh flex justify-end items-center text-white p-[20px]">
                    <FontAwesomeIcon icon={faXmark} className="font-bold text-4xl cursor-pointer" onClick={() => setIsOpen(false)} />
                </div>
                <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-15">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`font-medium text-[50px] leading-[140%] tracking-[-0.01em] transition-all delay-120 text-white`}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <h1 className="font-bold text-3xl">Joey&reg;</h1>
            <nav className="flex gap-4 rounded-[48px] px-[5px] bg-black w-[470px] h-[56px] justify-between items-center mt-[20px] max-[600px]:hidden" onMouseLeave={() => setActive(defaultActive)}>
                <div className={`active rounded-[48px] p-4 w-[87px] h-[46px] bg-white absolute transition-all delay-120 ${active === 1 ? 'ml-0' : active === 2 ? 'ml-[110px] w-[110px]' : active === 3 ? 'ml-[245px] w-[90px]' : 'ml-[360px] w-[100px]'}`}></div>
                {navItems.map((item, index) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`font-medium text-[20px] leading-[140%] tracking-[-0.01em] transition-all delay-120 ${active === index + 1 ? "text-black" : "text-[#c4c4c4]"
                            } z-[1] ${index === 0 ? "ml-3.5" : ""} ${index === navItems.length - 1 ? "mr-3.5" : ""}`}
                        onMouseMove={() => setActive(index + 1)}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
            <button className="w-[40px] h-[40px] justify-center items-center bg-black rounded-full cursor-pointer hidden max-[600px]:flex" onClick={() => setIsOpen(true)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div >
    );
}

export default Header;