// SPFx-style starter logic for a Team Hub web part.
// Adapt this structure inside an SPFx React web part.

export interface TeamLink {
  title: string;
  url: string;
  category: "Project" | "Resource" | "Document";
}

export const teamLinks: TeamLink[] = [
  { title: "Project Portal", url: "#", category: "Project" },
  { title: "Policies & Guides", url: "#", category: "Document" },
  { title: "Team Resources", url: "#", category: "Resource" }
];

export function filterLinks(links: TeamLink[], category?: TeamLink["category"]) {
  return category ? links.filter(link => link.category === category) : links;
}
