import { client } from "@/sanity/client";
import Image from "next/image";

const DINKUM_QUERY = /* groq */ `
{
  "latest": *[_type == "dinkum"] | order(publishedAt desc)[0]{
    _id,
    episode,
    title,
    description,
    publishedAt,
    "mediaType": podcastTrailerOrThumbnail[0]._type,
    "assetUrl": podcastTrailerOrThumbnail[0].asset->url
  }
}
`;

export default async function DinkumPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = await client.fetch<{ latest: any }>(DINKUM_QUERY);
  const latest = data?.latest;

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
    <div className="p-16 whitespace-pre-line leading-tight">
      <h1 className="text-3xl font-semibold">Dinkum logo placeholder</h1>
      <div className="flex flex-col lg:flex-row gap-8 pt-16 pb-10">
        <div className="flex-1">
          <h2 className="text-[clamp(2rem,3vw,5rem)] uppercase">
            LATEST EPISODE
          </h2>
        </div>
        <div className="flex-1">
          <div className="flex flex-row gap-4 items-center">
            <a
              href="https://apple.com/apple-podcasts"
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
            <a
              href="https://spotify.com"
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

            <a
              href="https://youtube.com" // replace with your episode or channel link
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
          </div>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row gap-8">
        <div className="relative flex-1 h-[35vh] bg-black group">
          {latest.mediaType === "image" && latest.assetUrl ? (
            <Image
              src={latest.assetUrl}
              alt={latest.title ?? "Dinkum episode thumbnail"}
              fill
              className="w-full h-full object-cover pointer-events-none select-none"
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
            EP{String(latest.episode).padStart(2, "0")}
          </h2>
          <h1 className="text-xl font-medium">{latest.title}</h1>
          <h1 className="text-xl font-medium pt-3 pb-5">
            {new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(
              new Date(latest.publishedAt)
            )}
          </h1>

          {latest.description && (
            <p className=" text-neutral-300">{latest.description}</p>
          )}

          {/* <div className="pt-6">
            <a
              href="#"
              className="text-sm uppercase tracking-wide text-neutral-400 hover:text-white transition"
            >
              Listen Now →
            </a>
          </div> */}
        </article>
      </section>

      <h2 className="text-[clamp(2rem,3vw,5rem)] uppercase pt-16 mb-10">
        OTHER EPISODEs
      </h2>
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
    />
  );
}
