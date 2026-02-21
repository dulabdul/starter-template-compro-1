import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'culture',
  title: 'Culture & Values Section',
  type: 'document',
  fields: [
    defineField({ 
      name: 'heading', 
      title: 'Heading', 
      type: 'string',
      initialValue: 'Our Culture & Values'
    }),
    defineField({ 
      name: 'description', 
      title: 'Description', 
      type: 'text' 
    }),
    defineField({
      name: 'valuesList',
      title: '3 Core Values',
      type: 'array',
      validation: (Rule) => Rule.max(3), // Membatasi maksimal 3 poin sesuai desain
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Value Title (e.g., Innovation)', type: 'string' },
            { name: 'text', title: 'Short Description', type: 'string' }
          ]
        }
      ]
    }),
    defineField({ 
      name: 'founderImage', 
      title: 'Founder / Team Image (Right Side)', 
      type: 'image', 
      options: { hotspot: true } 
    }),
  ],
})