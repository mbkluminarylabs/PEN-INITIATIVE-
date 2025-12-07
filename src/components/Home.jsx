import Header from "./Header"
import Hero from './Hero';
import About from './About';
import Impact from './Impact';
import Programs from './Programs';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Impact />
                    <Programs />
                    <Gallery />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Home