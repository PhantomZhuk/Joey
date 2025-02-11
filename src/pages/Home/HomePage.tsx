import Marquee from "../../components/Marquee/Marquee";
import HomeContainer from "../../components/HomeContainer/HomeContainer";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import ExpertiseContainer from "../../components/ExpertiseContainer/ExpertiseContainer";
import TestimonialsContainer from "../../components/TestimonialsContainer/TestimonialsContainer";
import EmailContainer from "../../components/EmailContainer/EmailContainer";
import Footer from "../../layouts/Footer/Footer";

export default function HomePage() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <HomeContainer />
            <ProjectContainer />
            <ExpertiseContainer />
            <Marquee />
            <TestimonialsContainer />
            <EmailContainer />
            <Footer />
        </div>
    );
}