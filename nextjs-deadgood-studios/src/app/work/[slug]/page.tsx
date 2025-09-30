import { client } from "@/sanity/client";
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image";

const POST_QUERY = `
  *[_type == "projects" && slug.current == $slug][0]{
    _id,
    title,
    client,
    tags[]->{name},
    publishedAt,
    body,
    featureMedia[0]{
      _type,
      asset->{url}
    },
    gallery[]{
      asset->{url}
    }
  }
`;

const options = { next: { revalidate: 30 } };

export default async function WorkDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<
    SanityDocument & {
      featureMedia?: { _type: "image" | "file"; asset?: { url: string } };
      gallery?: { asset?: { url: string } }[];
      tags?: { name: string }[];
      client?: string;
    }
  >(POST_QUERY, await params, options);

  const media = post.featureMedia;
  const mediaUrl = media?.asset?.url ?? null;
  const galleryImages = post.gallery ?? [];

  return (
    <div className="flex flex-col gap-10">
      <div className="relative w-full aspect-video bg-black">
        {media?._type === "image" && mediaUrl ? (
          <Image
            src={mediaUrl}
            alt={post.title}
            fill
            className="object-cover z-0 round-xl"
          />
        ) : media?._type === "file" && mediaUrl ? (
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={mediaUrl}
            autoPlay
            loop
            muted
            controls
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
          />
        ) : null}
      </div>
      <div className="">
        <h2 className="text-4xl text-neutral-200 leading-none ">
          {post.title}
        </h2>
        <h1 className="text-[18px] text-neutral-200 mb-4 uppercase">
          {new Date(post.publishedAt).getFullYear()} | Client: {post.client} |
          {"  "}
          {post.tags?.map((tag: any) => tag.name).join(", ")}
        </h1>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
      {galleryImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={`gallery-${index}`}
              className="relative w-full aspect-square overflow-hidden"
            >
              <Image
                src={image.asset?.url || ""}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
