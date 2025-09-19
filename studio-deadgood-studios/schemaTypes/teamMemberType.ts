import {defineField, defineType} from 'sanity'

export const tagType = defineType({
  name: 'teamMembers',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'teamMemberName',
      title: 'Team Member Name',
      type: 'string',
    }),
    defineField({
      name: 'yearOfBirth',
      title: 'Year of Birth',
      type: 'number',
    }),
    defineField({
      name: 'origin',
      title: 'Origin / Background',
      type: 'string',
      description: 'Nationality / place of birth',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'string',
      description: 'Short paragraph of team member experience',
    }),
    defineField({
      name: 'photo',
      title: 'Team Member Photo',
      type: 'image',
      description: 'Upload one image of the team member',
    }),
  ],
})
