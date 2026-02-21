import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutUs',
  title: 'About Us Section',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: 'Main Title', 
      type: 'string',
      description: 'Gunakan tag <br/> jika ingin memaksa teks turun ke baris baru seperti di desain.'
    }),
    defineField({ name: 'badge', title: 'Badge Text (Pill)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ 
      name: 'imageLeft', 
      title: 'Left Image (Large Square)', 
      type: 'image', 
      options: { hotspot: true } 
    }),
    defineField({ 
      name: 'imageRight', 
      title: 'Right Image (Small Arch)', 
      type: 'image', 
      options: { hotspot: true } 
    }),
    // Field array untuk menampung maksimal 4 kotak statistik
    defineField({
      name: 'stats',
      title: 'Company Statistics',
      type: 'array',
      validation: (Rule) => Rule.max(4),
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Number Value (e.g., 2022, 96)', type: 'string' },
            { name: 'label', title: 'Label (e.g., Founded, Clients)', type: 'string' }
          ]
        }
      ]
    })
  ],
})