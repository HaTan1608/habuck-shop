import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <img src="/banner1.png" alt="headphones" className="hero-banner-image" />
  );
};

export default HeroBanner;
