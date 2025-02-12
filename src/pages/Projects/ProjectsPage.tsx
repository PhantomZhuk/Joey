import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import { projects } from "../../components/ProjectContainer/ProjectContainer"
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function ProjectsPage() {
    return (
        <div className="w-full min-h-screen flex flex-col gap-10">
            <Header />
            <div className="w-full min-h-screen flex-wrap flex justify-between py-[50px] px-[110px] gap-10 max-[1150px]:px-[50px] max-[830px]:px-[40px] max-[500px]:px-[16px]">
                {projects.map((project: any) => (
                    <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ProjectsPage;