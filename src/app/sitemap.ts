import type { MetadataRoute } from "next"

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: "https://cursopersonagem.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1
		}
	]
}

export default sitemap
