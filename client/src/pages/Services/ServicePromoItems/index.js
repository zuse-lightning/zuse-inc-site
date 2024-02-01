import React from "react";
import { Header, Image } from "semantic-ui-react";
import PromoItems from "../../../assets/images/banners/promo-items.png";
import PromoItemsMobile from "../../../assets/images/banners/promo-items-mobile.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const promoItemsResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServicePromoItems = (props) => {

    const { screenWidth } = props;

    return (
        <div id="promo-items-container">
            <Header as="h1" id="promo-items-header">Promotional Items</Header>
            <Image fluid src={screenWidth >= 992 ? PromoItems : PromoItemsMobile} />
            <br />
            <Header as="h2" className="promo-items-subheader">How It Works</Header>
            <br />
            <p className="promo-items-text">
                Need to boost brand visibility? With our extensive range of promotional items,
                from branded merchandise to unique giveaways, we help you create memorable 
                experiences for your audience. Maximize your marketing impact with customized 
                promotional products that leave a lasting impression!
            </p>
            <br />
            <p className="promo-items-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae.
                Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque
                saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem
                odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae. Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non!
            </p>
            <br />
            <Header as="h2" className="promo-items-subheader">What You'll Get</Header>
            <div id="promo-items-results-container">
                {promoItemsResults.map((result, index) => (
                    <div className="promo-items-result-col" key={index}>
                        <Image className="promo-items-result-img" src={result} />
                    </div>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
};

export default ServicePromoItems;