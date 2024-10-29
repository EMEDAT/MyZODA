// pages/index.tsx
import Header from '../../components/Header';
import Features from '../../components/Features';
import Chart from '../../components/Chart';
import Gallery from '../../components/Gallery';
import Partners from '../../components/Partners';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Chart />
      <Features />
      <Gallery />
      <Partners />
      <Testimonials />
      <Footer />
    </>
  );
}
