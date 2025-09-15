import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "next-sanity";
import Image from "next/image";

const POST_QUERY = `
*[_type == "projects" && slug.current == $slug][0]{
  _id, title, publishedAt, body,
  "media": coalesce(
    featureMedia[0]{
      "type": select(_type == "image" => "image", _type == "file" => "video"),
      "url": asset->url,
      "assetRef": select(_type == "image" => asset->_ref, null),
      "mimeType": asset->mimeType
    },
    {"type":"video","url": video[0].asset->url, "mimeType": video[0].asset->mimeType},
    {"type":"image","url": image.asset->url, "assetRef": image.asset->_ref, "mimeType": image.asset->mimeType}
  )
}
`;

const builder = imageUrlBuilder(client);
const options = { next: { revalidate: 30 } };

export default async function WorkDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await client.fetch(POST_QUERY, { slug }, options);

  const published = post?.publishedAt
    ? new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
        timeZone: "UTC",
      }).format(new Date(post.publishedAt))
    : null;

  const heroImageUrl =
    post?.media?.type === "image"
      ? post.media.assetRef
        ? builder
            .image(post.media.assetRef)
            .width(2000)
            .height(1200)
            .fit("crop")
            .url()
        : post.media.url
      : null;

  return (
    <div>
      <div className="relative w-full h-[80vh]">
        {post?.media?.type === "video" && post.media.url ? (
          <video
            src={post.media.url}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted
          />
        ) : heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt={post?.title ?? "Project"}
            fill
            className="object-cover"
            priority
          />
        ) : null}
      </div>

      <h1 className="text-4xl font-bold mb-8">{post?.title}</h1>

      <div>
        {published && <p>Published: {published}</p>}
        {Array.isArray(post?.body) && <PortableText value={post.body} />}
      </div>
    </div>
  );
}
