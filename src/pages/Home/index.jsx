import React from "react";
import { BannerSection } from "./BannerSection";
import { TrendingNow } from "./TrendingNow";
import { BrandNewTrips } from "./BrandNewTrips";
import { WhyUsSection } from "./WhyUsSection";
import { LocalExperts } from "./LocalExperts";
import { FeedbackSection } from "./FeedbackSection";
import { EuropeSection } from "./EuropeSection";
import { AsiaSection } from "./AsiaSection";
import { JoinUsSection } from "./JoinUsSection";
import { LookingDestinations } from "./LookingDestinations";


export function Home() {
    return (
    <>
        <BannerSection />
        <TrendingNow />
        <BrandNewTrips />
        <WhyUsSection />
        <LocalExperts />
        <FeedbackSection />
        <EuropeSection />
        <AsiaSection />
        <LookingDestinations />
        <JoinUsSection/>
    </>
    );
};