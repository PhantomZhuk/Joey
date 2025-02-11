import { Link } from "react-router";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="w-full h-[10vh] flex justify-between items-center px-[110px]">
            <h2 className="font-medium tetx-[14px] leading-[171%] tracking-[-0.01em]">{year} &copy; — Made by Djectstudio</h2>
            <div className="flex gap-10">
                <Link to="#" className="font-medium tetx-[14px] leading-[171%] tracking-[-0.01em]">Dribbble</Link>
                <Link to="#" className="font-medium tetx-[14px] leading-[171%] tracking-[-0.01em]">Instagram</Link>
                <Link to="#" className="font-medium tetx-[14px] leading-[171%] tracking-[-0.01em]">LinkedIn</Link>
            </div>
        </div>
    );
}

export default Footer;