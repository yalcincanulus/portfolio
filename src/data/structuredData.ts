import { siteData } from "./portfolio";

const siteUrl = new URL("/", import.meta.env.SITE).href;
const personId = `${siteUrl}#person`;
const websiteId = `${siteUrl}#website`;

/** The site owner. Every page uses the same @id so search engines see one entity. */
const person = {
	"@type": "Person",
	"@id": personId,
	name: siteData.name,
	givenName: siteData.givenName,
	familyName: siteData.familyName,
	alternateName: siteData.alternateName,
	url: siteUrl,
	jobTitle: "Full-Stack Engineer",
	description: siteData.description,
	address: { "@type": "PostalAddress", addressCountry: "TR" },
	alumniOf: [
		{ "@type": "CollegeOrUniversity", name: "Istanbul Technical University" },
		{ "@type": "CollegeOrUniversity", name: "Sakarya University" },
	],
	knowsLanguage: ["Turkish", "English"],
	knowsAbout: [
		"TypeScript",
		"React",
		"Node.js",
		"Bun",
		"PostgreSQL",
		"Full-stack web development",
	],
	sameAs: [siteData.githubUrl, siteData.linkedinUrl],
};

/** Home page: the website and the person it belongs to */
export const homeJsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": websiteId,
			url: siteUrl,
			name: siteData.name,
			inLanguage: "en",
			publisher: { "@id": personId },
		},
		person,
	],
};

/** About page: a profile page whose main entity is the person */
export function profilePageJsonLd(pageUrl: URL, name: string) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"@id": `${pageUrl.href}#profilepage`,
		url: pageUrl.href,
		name,
		inLanguage: "en",
		isPartOf: { "@id": websiteId },
		mainEntity: person,
	};
}
