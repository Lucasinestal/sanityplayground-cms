export default {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      title: "Internal Link",
      name: "internalLink",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      name: "externalUrl",
      title: "External URL",
      description: "use fully qualified URLS for external links",
      type: "url",
    },
  ],
};
