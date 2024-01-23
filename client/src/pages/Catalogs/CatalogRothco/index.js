import React from "react";
import { Header, Image, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { sanmarData } from "../../../utils/sanmarData";
import PageContactFooter from "../../../components/PageContactFooter";

import "./style.css";

const CatalogRothco = () => {
    return (
        <div id="rothco-container">
            <Header as="h2" id="rothco-header">Popular Brands</Header>
            <br />
            <div id="rothco-brands-container">
                {sanmarData.map((product) => (
                    <>
                        <div className="rothco-brands-col">
                            <Image className="rothco-brands-img" src={product.images} />
                        </div>
                        <div className="rothco-brands-col">
                            <List className="rothco-brands-list">
                                <List.Header className="rothco-brands-list-header">{product.names}</List.Header>
                                {product.listItems.map((listItem) => (
                                    <List.Item className="rothco-brands-list-item">
                                        <List.Icon className="rothco-brands-list-icon" name="check" />
                                        <List.Content className="rothco-brands-list-content">{listItem}</List.Content>
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

export default CatalogRothco;