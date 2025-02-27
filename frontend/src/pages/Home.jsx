import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HeroNext from "../components/HeroNext";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(
    !sessionStorage.getItem("visited")
  );

  useEffect(() => {
    if (isFirstVisit) {
      sessionStorage.setItem("visited", "true");
    }
  }, [isFirstVisit]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="">
      { isFirstVisit && loading && (
        <Loader/>
      )}
      <NavBar onHome={true} />
      <Hero />
      <HeroNext />
    </div>
  );
};

export default Home;
