import React from "react";
import { Header, Image, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { sanmarData } from "../../../utils/sanmarData";
import PageContactFooter from "../../../components/PageContactFooter";

import "./style.css";

const CatalogAugusta = () => {
    return (
        <div id="augusta-container">
            <Header as="h2" id="augusta-header">Popular Brands</Header>
            <br />
            <div id="augusta-brands-container">
                {sanmarData.map((product) => (
                    <>
                        <div className="augusta-brands-col">
                            <Image className="augusta-brands-img" src={product.images} />
                        </div>
                        <div className="augusta-brands-col">
                            <List className="augusta-brands-list">
                                <List.Header className="augusta-brands-list-header">{product.names}</List.Header>
                                {product.listItems.map((listItem) => (
                                    <List.Item className="augusta-brands-list-item">
                                        <List.Icon className="augusta-brands-list-icon" name="check" />
                                        <List.Content className="augusta-brands-list-content">{listItem}</List.Content>
                                    </List.Item>
                                ))}
                            </List>
                            <Link target=":blank" to={product.links[0]}>
                                <Button className="more-info-btn">More Info</Button>
                            </Link>
                        </div>
                    </>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
}

export default CatalogAugusta;