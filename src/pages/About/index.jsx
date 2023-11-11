import React from "react";
import { BannerAboutUs } from "./BannerAboutUs";
import { TextSection } from "./TextSection";
import { WhyUsAbout } from "./WhyUsAbout";
import { LocalExpertsAbout } from "./LocalExpertsAbout";
import { AboutLooking } from "./AboutLooking";
import { JoinUsAbout } from "./JoinUsAbout";

export function About() {
    return(
        <>
            <BannerAboutUs/>,
            <TextSection/>,
            <WhyUsAbout/>,
            <LocalExpertsAbout/>,
            <AboutLooking/>,
            <JoinUsAbout/>
        </>
    )
}