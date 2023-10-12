// product.js

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the product',
    },
    {
      name: 'sku',
      title: 'Stock keeping unit',
      type: 'string',
      description: 'SKU of the product',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      description: 'A brief description of the product',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Product price',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      description: 'Discount in percentage',
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'color',
              title: 'Color',
              type: 'reference',
              to: [{type: 'color'}],
            },
            {
              name: 'dp',
              title: 'DP',
              type: 'image',
              of: [
                {
                  type: 'image',
                },
              ],
              description: 'Display image for the product',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                },
              ],
              description: 'Multiple images for the product',
            },
            {
              name: 'sfs',
              title: 'Stock for Size',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'size',
                      title: 'Size',
                      type: 'reference',
                      to: [{type: 'size'}],
                    },
                    {
                      name: 'stock',
                      title: 'Stock',
                      type: 'number',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'stock', // Display the size field as the title for the objects in the 'sfs' array
                      media: 'size.image'
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'color.name', // Display the size field as the title for the objects in the 'sfs' array
              media: 'dp'
            },
          },
        },
      ],
      description: 'Available colors and sizes with corresponding stock',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'productstags'}],
        },
      ],
      description: 'Tags associated with the product',
    },
    {
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
      description: 'Categories associated with the product',
    },
  ],
}
