export default {
  name: "landingHero",
  title: "Landing Hero",
  type: "document",
  fields: [
    {
      name: "backgroundImage",
      title: "Background image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    { name: "heading", title: "Heading", type: "string" },
    { name: "textContent", title: "Text Content", type: "string" },
  ],
};
