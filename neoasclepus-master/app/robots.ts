import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `https://neoasclepus.com/sitemap.xml`,
    };
}