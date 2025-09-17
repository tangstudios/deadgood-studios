import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tags'}]}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featureMedia',
      title: 'Feature Media',
      type: 'array',
      of: [
        {type: 'image', options: {hotspot: true}},
        {type: 'file', title: 'Video (MP4)', options: {accept: 'video/mp4'}},
      ],
      validation: (r) => r.required().min(1).max(1),
      description: 'Choose either a single image or a single MP4 video.',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      description: 'Add multiple images for a gallery.',
    }),
    defineField({
      name: 'video',
      type: 'array',
      of: [
        {
          type: 'file',
          title: 'Video File',
          options: {
            accept: 'video/*',
          },
        },
      ],
      description: 'Add one or more video files for this project.',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
