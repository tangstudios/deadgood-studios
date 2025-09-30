/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/client";
import Image from "next/image";

const TEAM_MEMBERS_QUERY = `
  *[_type == "teamMembers"] | order(yearOfBirth desc) {
    _id,
    teamMemberName,
    yearOfBirth,
    origin,
    bio,
    photo {
      asset -> {
        url
      }
    }
  }
`;

export default async function AboutPage() {
  const teamMembers = await client.fetch(TEAM_MEMBERS_QUERY);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <h1 className="text-4xl font-bold mb-10">MEET THE TEAM</h1> */}
      <div className=" flex justify-center items-center flex-col">
        {teamMembers.map((member: any) => (
          <div
            key={member._id}
            className="flex flex-col items-center text-center gap-4 md:w-[70%] lg:w-[60%]"
          >
            <div className="flex flex-col items-center md:bg-[#d2d3d5] p-12 gap-4">
              <h2 className="text-5xl uppercase md:text-black">
                {member.teamMemberName}
              </h2>
              <div className="flex flex-row">
                <h1 className="text-sm md:text-neutral-700">
                  {`Born ${member.yearOfBirth} `}
                </h1>
                <h1 className="text-sm md:text-neutral-700">
                  {" "}
                  {member.origin && ` | ${member.origin}`}
                </h1>
              </div>
              <h3 className="text-sm md:text-black">{member.bio}</h3>
            </div>
            {member.photo?.asset?.url && (
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src={member.photo.asset.url}
                  alt={member.teamMemberName}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
