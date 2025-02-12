import EmailContainer from "../../components/EmailContainer/EmailContainer";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

function ContactPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <Header />
            <EmailContainer />
            <Footer />
        </div>
    );
}

export default ContactPage;