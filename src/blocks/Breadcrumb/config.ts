import { Block } from "payload";

export const Breadcrumb: Block = {
  slug: "breadcrumb",
  labels: {
    singular: "Breadcrumb",
    plural: "Breadcrumbs",
  },
  fields: [
    {
      name: "autoBuild",
      label: "Auto Build Breadcrumb",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "items",
      label: "Manual Breadcrumb Items",
      type: "array",
      labels: {
        singular: "Breadcrumb Item",
        plural: "Breadcrumb Items",
      },
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
        },
        {
          name: "href",
          label: "URL",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
