import React, { Component } from "react";
import TopCatalogs from "../../components/TopCatalogs";
import SEO from "../../components/SEO";

class Catalogs extends Component {
    render() {

        const { location } = this.props;

        return (
            <>
                <SEO
                    location={location}
                    title="Catalogs"
                    description="Browse our top catalogs for your ideal product bases."
                    keywords="Zuse Inc., Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items"
                    type="website"
                    image="https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Catalogs.png"
                    url="https://www.zuse.com/catalogs"
                />
                <TopCatalogs location={location} />
            </>
        );
    }
}

export default Catalogs;