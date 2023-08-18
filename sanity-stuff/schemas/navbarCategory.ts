export default {
    name: 'navbarcategory',
    title: 'NavBarCategory',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the category',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
        description: 'The Link for the category',
      },
      {
        name: 'specialcategory',
        title: 'Special Category',
        description: 'Select whether it is the  Special Category or not',
        type: 'boolean',
        options: {
          layout: 'checkbox', // Use a checkbox for yes/no selection
        },
        initialValue: false, // Default selection is "no"
      },
      {
        name: 'hide',
        title: 'Hide from the Secondary Navbar?',
        description: 'Should it be hidden?',
        type: 'boolean',
        options: {
          layout: 'checkbox', // Use a checkbox for yes/no selection
        },
        initialValue: false, // Default selection is "no"
      },
    ],
  };