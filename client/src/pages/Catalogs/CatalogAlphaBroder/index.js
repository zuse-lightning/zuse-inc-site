import React from "react";
import { Header, Image, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { sanmarData } from "../../../utils/sanmarData";
import PageContactFooter from "../../../components/PageContactFooter";

import "./style.css";

const CatalogAlphaBroder = () => {
    return (
        <div id="alphabroder-container">
            <Header as="h2" id="alphabroder-header">Popular Brands</Header>
            <br />
            <div id="alphabroder-brands-container">
                {sanmarData.map((product) => (
                    <>
                        <div className="alphabroder-brands-col">
                            <Image className="alphabroder-brands-img" src={product.images} />
                        </div>
                        <div className="alphabroder-brands-col">
                            <List className="alphabroder-brands-list">
                                <List.Header className="alphabroder-brands-list-header">{product.names}</List.Header>
                                {product.listItems.map((listItem) => (
                                    <List.Item className="alphabroder-brands-list-item">
                                        <List.Icon className="alphabroder-brands-list-icon" name="check" />
                                        <List.Content className="alphabroder-brands-list-content">{listItem}</List.Content>
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

export default CatalogAlphaBroder;