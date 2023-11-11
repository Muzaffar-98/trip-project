import React from "react"
import { BannerContact } from "./BannerContact"
import { ContactLooking } from "./ContactLooking"
import { JoinContact } from "./JoinContact"
import { EmailList } from "./EmailList"

export function Contact() {
    return (
        <>
            <BannerContact/>,
            <EmailList/>,
            <ContactLooking/>,
            <JoinContact/>
        </>
    )
}