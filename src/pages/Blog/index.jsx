import React from "react"
import { BannerBlog } from "./BannerBlog"
import { BlogLooking } from "./BlogLooking"
import { JoinBlog } from "./JoinBlog"
import { Blog2Cards } from "./Blog2Cards"
import { Blog3Cards } from "./Blog3Cards"
import { BlogButtons } from "./BlogButtons"

export function Blog() {
    return (
        <>
            <BannerBlog/>,
            <BlogButtons/>,
            <Blog2Cards/>,
            <Blog3Cards/>,
            <BlogLooking/>,
            <JoinBlog/>
        </>
    )
}