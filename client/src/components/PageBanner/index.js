import React from "react";
import { Header, Breadcrumb } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";

const PageBanner = (props) => {

    const { location } = props;
    const { pathname } = useLocation();

    let pageBannerName;
    let pageBannerBreadcrumbs;

    switch (pathname) {
        case "/about":
            pageBannerName = "ABOUT";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "ABOUT", link: "/about" }
            ];
            break;
        case "/catalogs":
            pageBannerName = "CATALOGS";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CATALOGS", link: "/catalogs" }
            ];
            break;
        case "/services":
            pageBannerName = "SERVICES";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" }
            ];
            break;
        case "/services/screenprinting":
            pageBannerName = "SCREEN PRINTING";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "SCREEN PRINTING", link: "/services/screenprinting" }
            ];
            break;
        case "/services/embroidery":
            pageBannerName = "EMBROIDERY";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "EMBROIDERY", link: "/services/embroidery" }
            ];
            break;
        case "/services/promo-items":
            pageBannerName = "PROMOTIONAL ITEMS";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "PROMOTIONAL ITEMS", link: "/services/promo-items" }
            ];
            break;
        case "/services/fulfillment":
            pageBannerName = "FULFILLMENT";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "FULFILLMENT", link: "/services/fulfillment" }
            ];
            break;
        case "/services/ecommerce":
            pageBannerName = "E-COMMERCE";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "E-COMMERCE", link: "/services/ecommerce" }
            ];
            break;
        case "/services/dtg-dtf":
            pageBannerName = "DIRECT TRANSFER";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "DIRECT TRANSFER", link: "/services/dtg-dtf" }
            ];
            break;
        case "/services/sewing":
            pageBannerName = "SEWING";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "SEWING", link: "/services/sewing" }
            ];
            break;
        case "/services/dye-sublimation":
            pageBannerName = "DYE SUBLIMATION";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "DYE SUBLIMATION", link: "/services/dye-sublimation" }
            ];
            break;
        case "/services/print-on-demand":
            pageBannerName = "PRINT ON-DEMAND";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "PRINT ON-DEMAND", link: "/services/print-on-demand" }
            ];
            break;
        case "/services/graphic-design":
            pageBannerName = "GRAPHIC DESIGN";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "SERVICES", link: "/services" },
                { name: "GRAPHIC DESIGN", link: "/services/graphic-design" }
            ];
            break;
        case "/contact":
            pageBannerName = "CONTACT";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CONTACT", link: "/contact" }
            ];
            break;
        default:
            pageBannerName = "THERE HAS BEEN AN ERROR";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" }
            ];
    }

    return (
        <>
            {pathname !== "/" ? <div className={location.includes("americancontractprinting.com") ? "acp" : "zuse"} id="page-banner">
                <div className="page-banner-col">
                    <Header as="h2" id="page-banner-title">{pageBannerName}</Header>
                </div>
                <div className="page-banner-col">
                    <Breadcrumb id="page-banner-breadcrumbs">
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