import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import HousesForSale from "@/components/HousesForSale";
import HomesForRent from "@/components/HomesForRent";
import ServicedApartments from "@/components/ServicedApartments";
import BookingRooms from "@/components/BookingRooms";
import LandsForSale from "@/components/LandsForSale";
import ExploreListings from "@/components/ExploreListings";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import MeetOurAgents from "@/components/MeetOurAgents";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <HousesForSale />
      <HomesForRent />
      <ServicedApartments />
      <BookingRooms />
      <LandsForSale />
      <ExploreListings />
      <FAQ />
      <Testimonials />
      <MeetOurAgents />
    </main>
  );
}

