"use client"
import {Nav,Hero, Footer,Data, Services_overview, Reviews, Provide, Slidingskills, Gallery} from ".././components"
export default function Home() {

  return (
    <main className="min-h-screen bg-gray-100">
      <Nav/>
      <Hero/>
      <Slidingskills/>
      <Provide/>
      <Services_overview/>
      <Data/>
      <Gallery/>
      <Reviews/>
      <Footer/>
    </main>
  );
}
