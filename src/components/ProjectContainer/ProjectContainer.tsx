import { Link } from "react-router";
import Card1 from "../../assets/Card - Element-desktop.png"
import Card2 from "../../assets/Card2 - Element-desktop.png"
import Card3 from "../../assets/Card3 - Element-desktop.png"
import Card4 from "../../assets/Card4 - Element-desktop.png"
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectContainer() {
    const projects = [
        {
            id: 1,
            title: "Crtly",
            description: "Mobile App",
            image: Card1,
        },
        {
            id: 2,
            title: "Tansto",
            description: "Web Design",
            image: Card2,
        },
        {
            id: 3,
            title: "Senta",
            description: "Mobile App & Branding",
            image: Card3,
        },
        {
            id: 4,
            title: "Crint",
            description: "Mobile App",
            image: Card4,
        },
    ]

    return (
        <div className="w-full min-h-screen flex flex-col px-[110px] gap-10 pb-[50px]">
            <div className="w-full h-[20vh] flex justify-between items-end">
                <div className="flex flex-col gap-2">
                    <h2 className="font-medium text-[48px] leading-[120%] tracking-[-0.01em]">Projects</h2>
                    <p className="font-medium tetx-[20px] leading-[140%] tracking-[-0.01em] w-[300px]">As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
                </div>
                <Link to="/projects" className="flex items-center gap-2 font-medium tetx-[20px] leading-[140%] tracking-[-0.01em]">More
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_519)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6657 6.47278C12.3537 6.1855 11.9914 5.83831 11.6103 5.44627C10.5057 4.3102 9.20094 2.755 8.53846 1.165L9.46154 0.7804C10.0491 2.1905 11.2443 3.63526 12.3272 4.74919C12.8634 5.3007 13.3617 5.76069 13.7257 6.08253C13.9076 6.24332 14.0555 6.36929 14.1574 6.45459C14.2083 6.49723 14.2477 6.52968 14.2741 6.55122L14.3036 6.57523L14.3106 6.58091L14.3122 6.58215L14.8004 6.97273L14.3124 7.3631L14.3106 7.36455L14.3036 7.37024L14.2741 7.39425C14.2477 7.41578 14.2083 7.44823 14.1574 7.49088C14.0555 7.57617 13.9076 7.70214 13.7257 7.86293C13.3617 8.18477 12.8634 8.64476 12.3272 9.19627C11.2443 10.3102 10.0491 11.755 9.46154 13.165L8.53846 12.7804C9.20094 11.1905 10.5057 9.63526 11.6103 8.49919C11.9914 8.10719 12.3537 7.76004 12.6656 7.47278L-2.48817e-07 7.47278L-2.92528e-07 6.47278L12.6657 6.47278Z" fill="black" stroke="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_519">
                                <rect width="13" height="15" fill="white" transform="translate(0 13.5) rotate(-90)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>
            <div className="w-full min-h-[80vh] flex flex-wrap justify-between gap-10">
                {projects.map((project: any) => (
                    <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} />
                ))}
            </div>
        </div>
    );
}

export default ProjectContainer;