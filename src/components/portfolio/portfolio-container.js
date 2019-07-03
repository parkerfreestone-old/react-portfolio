import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log('portfolio container loaded');
    }

    portfolioItems() {
        const data = ["Eventbrite", "Quip", "Ministry Safe", "Swingaway"];

        return data.map(item => {
            return <PortfolioItem />;
        })
    }

    render() {
        return(
            <div>
                <h2>Portfolio Items Go Here</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}
