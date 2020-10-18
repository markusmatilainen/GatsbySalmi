import React, { Component } from "react"
import { graphql } from "gatsby"

class PostTemplate extends Component {
    render() {

        const currentPost = this.props.data.wordpressPost
        console.log(currentPost)

        return (
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: currentPost.title }} />
                <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
            </div>
        )
    }
}

export default PostTemplate


//const currentPost = this.props.data.post
//import PropTypes from "prop-types"
//import Img from "gatsby-image"
/**
export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        post(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
**/

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`