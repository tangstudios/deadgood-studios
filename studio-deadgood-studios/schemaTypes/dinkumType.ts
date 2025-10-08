import {defineField, defineType} from 'sanity'

export const dinkumType = defineType({
  name: 'dinkum',
  title: 'Dinkum',
  type: 'document',
  fields: [
    defineField({
      name: 'episode',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'podcastTrailerOrThumbnail',
      title: 'Podcast Trailer / Thumbnail',
      type: 'array',
      of: [
        {type: 'image', options: {hotspot: true}},
        {type: 'file', title: 'Video (MP4)', options: {accept: 'video/mp4'}},
      ],
      validation: (r) => r.required().min(1).max(1),
      description: 'Choose either a single image or a single MP4 video.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Short podcast episode summary',
      validation: (rule) => rule.required(),
    }),
  ],
})
