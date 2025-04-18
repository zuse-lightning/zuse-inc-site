import React from "react";
import { Header, Breadcrumb } from "semantic-ui-react";
import { Link, useLocation, useParams } from "react-router-dom";

import "./style.css";

const PageBanner = (props) => {

    const { location, whichWebsite } = props;
    const { pathname } = useLocation();
    const pathId = pathname.split("/")[2];
    const pathToken = pathname.split("/")[3];

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
        case "/careers":
            pageBannerName = "CAREERS";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "CAREERS", link: "/careers" }
            ];
            break;
        case "/terms":
            pageBannerName = "TERMS OF SERVICE";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "TERMS OF SERVICE", link: "/terms" }
            ];
            break;
        case "/privacy":
            pageBannerName = "PRIVACY POLICY";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "PRIVACY POLICY", link: "/privacy" }
            ];
            break;
        case "/login":
            pageBannerName = "LOG IN";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "LOG IN", link: "/login" }
            ];
            break;
        case "/register":
            pageBannerName = "REGISTER";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "REGISTER", link: "/register" }
            ];
            break;
        case "/reviews":
            pageBannerName = "REVIEWS";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "REVIEWS", link: "/reviews" }
            ];
            break;
        case `/review/${pathId}`:
            pageBannerName = "CUSTOMER REVIEW";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "REVIEWS", link: "/reviews" },
                { name: "CUSTOMER REVIEW", link: `/review/${pathId}` }
            ];
            break;
        case "/write":
            pageBannerName = "WRITE A REVIEW";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "REVIEWS", link: "/reviews" },
                { name: "WRITE", link: "/write" }
            ];
            break;
        case `/edit/${pathId}`:
            pageBannerName = "EDIT REVIEW";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "REVIEWS", link: "/reviews" },
                { name: "EDIT REVIEW", link: `/edit/${pathId}` }
            ];
            break;
        case "/forgot":
            pageBannerName = "FORGOT PASSWORD";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "FORGOT PASSWORD", link: "/forgot" }
            ];
            break;
        case `/reset/${pathId}/${pathToken}`:
            pageBannerName = "RESET PASSWORD";
            pageBannerBreadcrumbs = [
                { name: "HOME", link: "/" },
                { name: "RESET PASSWORD", link: `/reset/${pathId}/${pathToken}` }
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
            {pathname !== "/" ? <div className={whichWebsite(location, "zuse", "acp", "union-print")} id="page-banner">
                <div className="page-banner-col">
                    <Header as="h2" id="page-banner-title">{pageBannerName}</Header>
                </div>
                <div className="page-banner-col">
                    <>
                        {pageBannerBreadcrumbs.map((crumb, index) => (
                            <Breadcrumb id="page-banner-breadcrumbs" key={index}>
                                <Breadcrumb.Section as={Link} to={crumb.link} className="breadcrumb-link">{crumb.name}</Breadcrumb.Section>
                                {index === pageBannerBreadcrumbs.length - 1 ? null : <Breadcrumb.Divider className="breadcrumb-link-divider" />}
                            </Breadcrumb>
                        ))}
                    </>
                </div>
            </div> : null}
        </>
    );
}

export default PageBanner;