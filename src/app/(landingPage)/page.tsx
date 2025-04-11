import About from "./About";
import Blogs from "./Blog";
import ContactSection from "./Contact";
import Hero from "./Hero";
import PricingSection from "./Pricing";
import Quote from "./Quote";
import ServicesSection from "./Services";
import Team from "./Team";
import TestimonialsSection from "./Testemonials";

export default function Home() {
  return (
    <div className="mt-20">
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <Quote />
      <div id="team">
        <Team />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="blog">
        <Blogs />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}








// import About from "./About";
// import Blogs from "./Blog";
// import ContactSection from "./Contact";
// import Hero from "./Hero";
// import PricingSection from "./Pricing";
// import Quote from "./Quote";
// import ServicesSection from "./Services";
// import Team from "./Team";
// import TestimonialsSection from "./Testemonials";

// export default function Home() {
//   return (
//     <div className="mt-20">
//     <Hero />
//     <ServicesSection />
//     <Quote />
//     <Team />
//     <About />
//     <PricingSection />
//     <TestimonialsSection />
//     <Blogs />
//     <ContactSection />
//     </div>
//   );
// }