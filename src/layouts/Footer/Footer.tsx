import { Link } from "react-router";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="w-full h-[10vh] flex justify-between items-center px-[110px] max-[1150px]:px-[50px] max-[830px]:px-[40px] max-[600px]:flex-col max-[600px]:gap-5 max-[600px]:py-[20px] max-[600px]:h-[15vh] max-[600px]:items-start max-[500px]:px-[16px]">
            <h2 className="font-medium text-[14px] leading-[171%] tracking-[-0.01em]">{year} &copy; — Made by Djectstudio</h2>
            <div className="flex gap-10">
                <Link to="#" className="font-medium text-[14px] leading-[171%] tracking-[-0.01em]">Dribbble</Link>
                <Link to="#" className="font-medium text-[14px] leading-[171%] tracking-[-0.01em]">Instagram</Link>
                <Link to="#" className="font-medium text-[14px] leading-[171%] tracking-[-0.01em]">LinkedIn</Link>
            </div>
        </div>
    );
}

export default Footer;