"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Award, Coffee, Heart, Leaf, MapPin, Sparkles, Truck, Users, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="large"
      background="noiseDiagonalGradient"
      cardStyle="outline"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Namaste chai  "
          navItems={[
            { name: "Menu", id: "features" },
            { name: "About", id: "about" },
            { name: "Stories", id: "testimonial" },
            { name: "Order", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Namaste Chai"
          description="Authentic Indian chai and café experience. Fresh ingredients, traditional recipes, and genuine warmth in every cup."
          buttons={[
            { text: "Explore Our Menu", href: "#features" },
            { text: "Order Now", href: "#contact" }
          ]}
          imageSrc="http://img.b2bpic.net/premium-photo/table-with-food-cups-coffee-cup-coffee_1316263-64546.jpg?id=306279901"
          imageAlt="Traditional chai preparation with steaming spices"
          showDimOverlay={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Story"
          tagIcon={Heart}
          title="A Cup of Comfort & Connection"
          description="Namaste Chai is a women-owned café in Jalandhar dedicated to preserving the authentic traditions of Indian chai while creating a welcoming community space. We believe every cup tells a story—of heritage, of warmth, and of the hands that craft it with care. Our chai is made with carefully selected spices, fresh ingredients, and a passion for delivering genuine Indian café experiences."
          metrics={[
            { value: "10+", title: "Years of Tradition" },
            { value: "100%", title: "Women-Owned & Operated" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfjzgcAVv3SLgj6FtBCgtrhM4N/uploaded-1772992955311-pwqbvfem.png"
          imageAlt="Cozy café interior with warm lighting"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBorderGlow
          title="Why Choose Namaste Chai"
          description="Experience the finest Indian chai crafted with passion and authenticity"
          features={[
            { icon: Leaf, title: "Premium Ingredients", description: "Sourced fresh spices and finest tea leaves to ensure authentic, rich flavors in every cup" },
            { icon: Users, title: "Community Space", description: "A welcoming environment for everyone—whether you're alone, with friends, or looking for connection" },
            { icon: Heart, title: "Handcrafted Care", description: "Every chai is prepared with individual attention, using traditional methods passed down through generations" },
            { icon: Truck, title: "Fast Delivery", description: "Quick takeaway and reliable delivery options so you can enjoy Namaste Chai wherever you are" },
            { icon: Sparkles, title: "Cozy Ambiance", description: "Instagram-worthy café interior with warm lighting, comfortable seating, and inclusive, LGBTQ-friendly atmosphere" },
            { icon: Award, title: "Authentic Recipes", description: "Traditional chai masala blends and time-honored preparation methods that honor Indian heritage" }
          ]}
          tag="Our Menu"
          tagIcon={Coffee}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFifteen
          testimonial="Namaste Chai is my favorite place to unwind after work. The chai is absolutely authentic, and the café feels like a warm hug. Every visit reminds me why supporting women-owned businesses matters."
          rating={5}
          author="Priya Sharma, Marketing Professional"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/woman-drinking-hot-chocolate-cafe_23-2149944044.jpg", alt: "Priya Sharma" },
            { src: "http://img.b2bpic.net/free-photo/top-view-table-full-food_23-2149209253.jpg?id=21088367", alt: "Customer testimonial" },
            { src: "http://img.b2bpic.net/free-photo/closeup-shot-sandwich-wooden-food-tray-with-healthy-fruit-shake_181624-3440.jpg?id=7926242", alt: "Customer testimonial" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfjzgcAVv3SLgj6FtBCgtrhM4N/uploaded-1772992278742-5d6iw3db.jpg", alt: "Customer testimonial" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted By Our Community"
          description="Namaste Chai is proudly certified and recognized by leading organizations"
          tag="Certifications"
          tagIcon={Shield}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          names={[
            "Women Entrepreneurs Association",            "Fair Trade Verified",            "Organic Certified",            "Local Business Council",            "Quality Assured",            "Community Partner",            "Natural Wellness Certified"
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/vintage-women-s-day-badge-collection_23-2148414832.jpg",            "http://img.b2bpic.net/free-vector/flat-compostable-labels-stamps_23-2149396838.jpg",            "http://img.b2bpic.net/free-vector/cruelty-free-hand-drawn-badge-set_23-2148796637.jpg",            "http://img.b2bpic.net/free-vector/collection-traditional-oktoberfest-badges_23-2147661909.jpg",            "http://img.b2bpic.net/free-vector/genuine-quality-rubber-stamps-set-four_1017-31465.jpg",            "http://img.b2bpic.net/free-vector/flat-4th-july-independence-day-label-collection_23-2148967176.jpg",            "http://img.b2bpic.net/free-vector/gradient-nutritionist-job-labels-template_23-2150103317.jpg"
          ]}
          speed={40}
          showCard={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Visit?"
          tagIcon={MapPin}
          title="Order Your Perfect Cup of Chai Today"
          description="Visit us for dine-in and takeaway, or have your favorite Namaste Chai delivered right to your door. Experience authentic Indian chai crafted with care."
          buttons={[
            { text: "Dine In", href: "https://maps.google.com" },
            { text: "Order Online", href: "https://food-delivery-platform.com" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Navigate",              items: [
                { label: "Home", href: "/" },
                { label: "Menu", href: "#features" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Order",              items: [
                { label: "Dine In", href: "https://maps.google.com" },
                { label: "Takeaway", href: "https://food-delivery-platform.com" },
                { label: "Delivery", href: "https://food-delivery-platform.com" },
                { label: "Catering", href: "#contact" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Email", href: "mailto:hello@namastechai.com" },
                { label: "Phone", href: "tel:+919876543210" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Accessibility", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Namaste Chai. All rights reserved."
          bottomRightText="Made with warmth and authenticity"
        />
      </div>
    </ThemeProvider>
  );
}
