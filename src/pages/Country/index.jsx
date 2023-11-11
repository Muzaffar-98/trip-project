import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { BannerItaly } from "./BannerItaly";
import { AvialableTrips } from "./AvialableTrips";
import { ItalyNewTrips } from "./ItalyNewTrips";
import { FeedbackItaly } from "./FeedbackItaly";
import { JoinUsSection } from "./JoinUsSection";
import { LookingDestinations } from "./LookingDestinations";
import { PlanYourTrip } from "./PlanYourTrip";
import { MapItaly } from "./MapItaly";


export function Country() {
    const params = useParams();
    const navigate = useNavigate();
    return <>
        <BannerItaly/>
        <AvialableTrips/>
        <MapItaly/>
        <ItalyNewTrips/>
        <FeedbackItaly/>
        <PlanYourTrip/>
        <LookingDestinations/>
        <JoinUsSection/>

    </> 
}