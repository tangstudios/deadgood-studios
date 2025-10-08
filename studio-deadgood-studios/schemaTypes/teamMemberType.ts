import {defineField, defineType} from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMembers',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'teamMemberName',
      title: 'Team Member Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'yearOfBirth',
      title: 'Year of Birth',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'origin',
      title: 'Origin / Background',
      type: 'string',
      description: 'Nationality / place of birth',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'string',
      description: 'Short paragraph of team member experience',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Team Member Photo',
      type: 'image',
      description: 'Upload one image of the team member',
      validation: (rule) => rule.required(),
    }),
  ],
})
