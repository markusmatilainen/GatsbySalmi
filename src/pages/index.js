import React from "react"
import { Link } from "gatsby"

const Index = () => {
    return (
        <div>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            <h1>Welcome</h1>

            <Link to="/frontpage">
                <p>Frontpage</p>
            </Link>
        </div>
      )
}

export default Index