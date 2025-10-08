/* eslint-disable @typescript-eslint/no-explicit-any */
import TeamCarousel from "@/components/TeamCarousel/TeamCarousel";
import { client } from "@/sanity/client";

const TEAM_MEMBERS_QUERY = `
  *[_type == "teamMembers"] | order(yearOfBirth desc) {
    _id,
    teamMemberName,
    yearOfBirth,
    origin,
    bio,
    photo {
      asset -> { url }
    }
  }
`;

export default async function AboutPage() {
  const teamMembers = await client.fetch(TEAM_MEMBERS_QUERY);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <TeamCarousel members={teamMembers ?? []} />
    </div>
  );
}
