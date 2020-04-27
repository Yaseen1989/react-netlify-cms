import React from "react"
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"
import Layout from "../components/layout"
import postlist from "../posts.json"
import "./pages.css"
import Carsoul from "../components/slider";
import AnimatedBoxes from "../components/animated-boxes"

const Post = (props) => {
    return (
        <Layout>
            <div className="slider-boxes-section">
                <Carsoul />
                <AnimatedBoxes />
            </div>
            <div className="post">
                <Markdown source={postlist[0].content} escapeHtml={false} />
            </div>
        </Layout>
    )
}


export default Post