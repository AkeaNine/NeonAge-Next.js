export default {
    name: 'topSellingImages',
    title: 'Top Selling Images',
    type: 'document',
    fields: [
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }], // Use the built-in 'image' type
      },
    ],
  };