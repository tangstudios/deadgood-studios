import {defineField, defineType} from 'sanity'

export const tagType = defineType({
  name: 'tags',
  title: 'Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'The name of the tag used for tagging and filtering projects.',
    }),
  ],
})
