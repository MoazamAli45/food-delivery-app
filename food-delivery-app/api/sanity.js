import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

export const Client = sanityClient({
  projectId: "ilduwhmg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageBuilder(Client);

export const urlFor = (source) => builder.image(source);
