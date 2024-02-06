import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lng',
      type: 'number',
      title: 'Longitude',
      validation: (rule) => rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (rule) => rule.required(),
    },
    {
      name: 'stars',
      type: 'number',
      title: 'Stars',
      validation: (rule) => rule.max(5).min(0).required(),
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews',
      validation: (rule) => rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      validation: (rule) => rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [
        {
          type: 'reference',
          to: [{type: 'dish'}],
        },
      ],
    },
  ],
})
