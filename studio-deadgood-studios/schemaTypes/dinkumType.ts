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
    // 🎧 External platform links
    defineField({
      name: 'youtubeLink',
      title: 'YouTube Link',
      type: 'url',
      description: 'Full URL to the YouTube episode or playlist',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'url',
      description: 'Full URL to the Spotify episode or show',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'applePodcastLink',
      title: 'Apple Podcast Link',
      type: 'url',
      description: 'Full URL to the Apple Podcasts episode or show',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
  ],
})
