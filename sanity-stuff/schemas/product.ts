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
      title: 'DP',
      name: 'dp',
      type: 'image',
      // options: {
      //   hotspot: true // <-- Defaults to false
      // },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
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
      description: 'Product price'
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      description: 'Discount in percentage'
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
              name: 'sizes',
              title: 'Sizes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'size',
                      title: 'Size',
                      type: 'string',
                    },
                    {
                      name: 'stock',
                      title: 'Stock',
                      type: 'number',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      description: 'Available colors and sizes with corresponding stock',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Multiple images for the product',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
      description: 'Tags associated with the product',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'productscategory' }],
        },
      ],
      description: 'Categories associated with the product',
    },
  ],
}
