import React, {Component} from "react"
import { graphql } from "gatsby"

class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage

        console.log(currentPage)

        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>                
            </div>
        )
    }
}

export default PageTemplate


//const currentPage = this.props.data.page

/**
export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        page(id: { eq: $id }) {
            title
            content
            date
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
**/

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            date
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`