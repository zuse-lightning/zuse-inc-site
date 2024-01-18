import React from "react";
import { Header, Breadcrumb } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import ScreenTextless from "../../assets/images/screen-printing-banner-textless.png";
import EmbroidTextless from "../../assets/images/embroidery-banner-textless.png";
import FulfillTextless from "../../assets/images/fulfillment-banner-textless.png";
import MainTextless from "../../assets/images/main-banner-textless.png";
import CodingBackground from "../../assets/images/coding-background.jpeg";

import "./style.css";

const PageBanner = (props) => {

    const { pathname } = useLocation();

    let pageBannerImage;
    let pageBannerName;
    let pageBannerBreadcrumbs;

    switch (pathname) {
        case "/about":
            pageBannerImage = MainTextless;
            pageBannerName = "ABOUT";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "ABOUT", link: "/about" }
            ];
            break;
        case "/catalogs":
            pageBannerImage = MainTextless;
            pageBannerName = "CATALOGS";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CATALOGS", link: "/catalogs" }
            ];
            break;
        case "/catalogs/sanmar":
            pageBannerImage = ScreenTextless;
            pageBannerName = "SANMAR";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CATALOGS", link: "/catalogs" },
                { name: "SANMAR", link: "/catalogs/sanmar" }
            ];
            break;
        case "/catalogs/ssactivewear":
            pageBannerImage = ScreenTextless;
            pageBannerName = "S&S ACTIVEWEAR";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CATALOGS", link: "/catalogs" },
                { name: "S&S ACTIVEWEAR", link: "/catalogs/ssactivewear" }
            ];
            break;
        case "/catalogs/alphabroder":
            pageBannerImage = ScreenTextless;
            pageBannerName = "ALPHABRODER";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CATALOGS", link: "/catalogs" },
                { name: "ALPHABRODER", link: "/catalogs/alphabroder" }
            ];
            break;
        case "/catalogs/augusta-sportswear":
            pageBannerImage = ScreenTextless;
            pageBannerName = "AUGUSTA SPORTSWEAR";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CATALOGS", link: "/catalogs" },
                { name: "AUGUSTA SPORTSWEAR", link: "/catalogs/augusta-sportswear" }
            ];
            break;
        case "/catalogs/rothco":
            pageBannerImage = ScreenTextless;
            pageBannerName = "ROTHCO";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CATALOGS", link: "/catalogs" },
                { name: "ROTHCO", link: "/catalogs/rothco" }
            ];
            break;
        case "/services":
            pageBannerImage = MainTextless;
            pageBannerName = "SERVICES";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" }
            ];
            break;
        case "/services/screenprinting":
            pageBannerImage = ScreenTextless;
            pageBannerName = "SCREEN PRINTING";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "SCREEN PRINTING", link: "/services/screenprinting" }
            ];
            break;
        case "/services/embroidery":
            pageBannerImage = EmbroidTextless;
            pageBannerName = "EMBROIDERY";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "EMBROIDERY", link: "/services/embroidery" }
            ];
            break;
        case "/services/promo-items":
            pageBannerImage = MainTextless;
            pageBannerName = "PROMOTIONAL ITEMS";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "PROMOTIONAL ITEMS", link: "/services/promo-items" }
            ];
            break;
        case "/services/fulfillment":
            pageBannerImage = FulfillTextless;
            pageBannerName = "FULFILLMENT";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "FULFILLMENT", link: "/services/fulfillment" }
            ];
            break;
        case "/services/shopify-stores":
            pageBannerImage = CodingBackground;
            pageBannerName = "SHOPIFY STORES";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "SHOPIFY STORES", link: "/services/shopify-stores" }
            ];
            break;
        case "/contact":
            pageBannerImage = MainTextless;
            pageBannerName = "CONTACT";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CONTACT", link: "/contact" }
            ];
            break;
        default:
            pageBannerImage = MainTextless;
            pageBannerName = "THERE HAS BEEN AN ERROR";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" }
            ];
    }

    console.log(pageBannerImage);

    return (
        <>
            {pathname !== "/" ? <div id="page-banner" style={{ backgroundImage: `linear-gradient(rgba(241, 21, 21, 0.8), rgba(241, 21, 21, 0.8)), url(${pageBannerImage})` }}>
                <div className="page-banner-col">
                    <Header as="h2" id="page-banner-title">{pageBannerName}</Header>
                </div>
                <div className="page-banner-col">
                    <Breadcrumb>
                        {pageBannerBreadcrumbs.map((crumb, index) => (
                            <>
                                <Breadcrumb.Section as={Link} to={crumb.link} className="breadcrumb-link">{crumb.name}</Breadcrumb.Section>
                                {index === pageBannerBreadcrumbs.length - 1 ? null : <Breadcrumb.Divider className="breadcrumb-link-divider" />}
                            </>
                        ))}
                    </Breadcrumb>
                </div>
            </div> : null}
        </>
    );
}

export default PageBanner;