import { client } from "@/sanity/client";
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image";

const POST_QUERY = `
  *[_type == "projects" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    body,
    featureMedia[0]{
      _type,
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
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  const media = post.featureMedia;
  const mediaUrl = media?.asset?.url ?? null;

  return (
    <div>
      <div className="relative w-full aspect-video bg-black">
        {media?._type === "image" && mediaUrl ? (
          <Image
            src={mediaUrl}
            alt={post.title}
            fill
            className="object-cover z-0"
          />
        ) : media?._type === "file" && mediaUrl ? (
          <video
            src={mediaUrl}
            autoPlay
            loop
            // muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : null}
      </div>
      <div className="">
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <p className="text-sm text-neutral-500 mb-4">
          Published: {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </div>
  );
}
