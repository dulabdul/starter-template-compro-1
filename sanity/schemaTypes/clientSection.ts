import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clientsSection',
  title: 'Clients & Portfolio Section',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: 'Main Title', 
      type: 'string', 
      initialValue: 'Our Clients' 
    }),
    defineField({ 
      name: 'leftBadge', 
      title: 'Left Badge Text', 
      type: 'string', 
      initialValue: 'Subtitle here' 
    }),
    defineField({ 
      name: 'description', 
      title: 'Description Text', 
      type: 'text' 
    }),
    defineField({ 
      name: 'rightBadge', 
      title: 'Right Badge Text', 
      type: 'string', 
      initialValue: 'A Big Company with us' 
    }),
    defineField({
      name: 'clientLogos',
      title: 'Client Logos',
      description: 'Upload logo-logo klien di sini. Logo akan otomatis berjalan (slider) di frontend.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({ 
      name: 'mainImage', 
      title: 'Bottom Main Image', 
      description: 'Gambar besar yang membentang di bawah kotak putih.',
      type: 'image', 
      options: { hotspot: true } 
    }),
  ],
})