/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/client";
import Image from "next/image";

const DINKUM_QUERY = `
{
  "latest": *[_type == "dinkum"] | order(publishedAt desc)[0]{
    _id,
    episode,
    title,
    description,
    publishedAt,
    "mediaType": podcastTrailerOrThumbnail[0]._type,
    "assetUrl": podcastTrailerOrThumbnail[0].asset->url,
    youtubeLink,
    spotifyLink,
    applePodcastLink
  },
  "others": *[_type == "dinkum"] | order(publishedAt desc)[1...10]{
    _id,
    episode,
    title,
    publishedAt,
    "mediaType": podcastTrailerOrThumbnail[0]._type,
    "assetUrl": podcastTrailerOrThumbnail[0].asset->url
  }
}
`;

export default async function DinkumPage() {
  // Fetch latest + other episodes
  const data = await client.fetch(DINKUM_QUERY);
  const latest = data?.latest;
  const others = data?.others || [];

  // No episodes yet fallback
  if (!latest) {
    return (
      <div className="p-16 whitespace-pre-line leading-tight">
        <h1 className="text-3xl font-semibold">Dinkum</h1>
        <h2 className="text-[clamp(2rem,3vw,5rem)] uppercase pt-16">
          LATEST EPISODE
        </h2>
        <p className="mt-6 text-neutral-500">No episodes yet.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <h1 className="text-3xl font-semibold">Dinkum logo placeholder</h1>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-10">
        <div className="flex-1">
          <h2 className="text-[clamp(2rem,3vw,5rem)] uppercase">
            LATEST EPISODE
          </h2>
        </div>

        {/* Platform Links */}
        <div className="flex-1">
          <div className="flex flex-row gap-4 items-center">
            {latest.applePodcastLink && (
              <a
                href={latest.applePodcastLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/podcast.png"
                  alt="Apple Podcasts"
                  width={50}
                  height={50}
                  className="hover:opacity-80 transition"
                />
              </a>
            )}
            {latest.spotifyLink && (
              <a
                href={latest.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/spotify.png"
                  alt="Spotify"
                  width={70}
                  height={70}
                  className="hover:opacity-80 transition"
                />
              </a>
            )}
            {latest.youtubeLink && (
              <a
                href={latest.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/youtube.png"
                  alt="YouTube"
                  width={60}
                  height={60}
                  className="hover:opacity-80 transition"
                />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Latest Episode */}
      <section className="flex flex-col lg:flex-row gap-8">
        <div className="relative flex-1 h-[35vh] bg-black group overflow-hidden">
          {latest.mediaType === "image" && latest.assetUrl ? (
            <Image
              src={latest.assetUrl}
              alt={latest.title ?? "Dinkum episode thumbnail"}
              fill
              className="object-cover pointer-events-none select-none"
              priority
            />
          ) : latest.mediaType === "file" && latest.assetUrl ? (
            <VideoCard src={latest.assetUrl} title={latest.title} />
          ) : (
            <div className="text-neutral-500 flex items-center justify-center h-full">
              No media for this episode.
            </div>
          )}
        </div>

        <article className="flex-1">
          <h2 className="text-[clamp(2rem,3vw,5rem)] leading-none">
            {String(latest.episode).padStart(2, "0")}
          </h2>
          <h1 className="text-xl font-medium pt-4">{latest.title}</h1>
          <h1 className="text-xl font-medium pt-3 pb-5">
            {new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(
              new Date(latest.publishedAt)
            )}
          </h1>

          {latest.description && (
            <p className="text-neutral-300">{latest.description}</p>
          )}
        </article>
      </section>

      {/* Other Episodes Carousel */}
      {others.length > 0 && (
        <>
          <h2 className="text-[clamp(2rem,3vw,5rem)] uppercase pt-16 mb-10">
            OTHER EPISODES
          </h2>
          <div className="overflow-x-auto scroll-smooth scrollbar-hide">
            <div className="flex flex-nowrap gap-8 pb-8">
              {others.map((ep: any) => (
                <div
                  key={ep._id}
                  className="w-[500px] flex-shrink-0 snap-center cursor-pointer"
                >
                  <div className="relative h-[300px] w-full bg-black group overflow-hidden">
                    {ep.mediaType === "image" && ep.assetUrl ? (
                      <Image
                        src={ep.assetUrl}
                        alt={ep.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : ep.mediaType === "file" && ep.assetUrl ? (
                      <video
                        src={ep.assetUrl}
                        muted
                        playsInline
                        loop
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-neutral-500">
                        No media
                      </div>
                    )}
                  </div>

                  <div className="mt-3 w-full">
                    <h3 className="text-lg font-medium leading-tight truncate">
                      {String(ep.episode).padStart(2, "0")} — {ep.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {new Intl.DateTimeFormat("en-GB", {
                        dateStyle: "medium",
                      }).format(new Date(ep.publishedAt))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function VideoCard({ src, title }: { src: string; title: string }) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      aria-label={title}
      className="w-full h-full object-cover"
    />
  );
}
