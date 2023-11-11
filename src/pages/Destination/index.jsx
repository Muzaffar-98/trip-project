import { Link, useSearchParams } from "react-router-dom";
import React from "react";
import { BannerDestination } from "./BannerDestination";
import { DestinationMenu } from "./DestinationMenu";
import { TopDestinations } from "./TopDestinations";
import { FeedbackSection } from "./FeedbackSection";
import { JoinUsSection } from "./JoinUsSection";


export function Destination() {
    const [queryParams, setQueryParams] = useSearchParams();
    console.log(queryParams.get("sort"));
    
    return(
        <>
            <BannerDestination />
            <DestinationMenu />
            <TopDestinations />
            <FeedbackSection />
            <JoinUsSection />
        </>
    ) 
}