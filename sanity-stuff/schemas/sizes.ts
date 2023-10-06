export default {
    name: 'size',
    title: 'Size',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Size',
        type: 'string',
        description: 'The size in roman charecters',
      },
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          description: 'The picture of the size',
        },
    ],
  }