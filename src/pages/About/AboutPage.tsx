import ExpertiseContainer from "../../components/ExpertiseContainer/ExpertiseContainer";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

function AboutPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <Header />
            <ExpertiseContainer />
            <Footer />
        </div>
    );
}

export default AboutPage;