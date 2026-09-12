/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Menu from './components/Menu';
import CustomOrders from './components/CustomOrders';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="font-sans antialiased text-brand-dark bg-brand-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProducts />
        <Menu />
        <CustomOrders />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
