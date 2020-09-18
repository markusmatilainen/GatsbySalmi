import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {

        const currentPost = this.props.data.wordpressPost
        //const currentPost = this.props.data.post

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