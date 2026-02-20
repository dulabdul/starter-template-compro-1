import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string' }),
    defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'Open Graph Image', type: 'image' }),
    defineField({ name: 'gaId', title: 'Google Analytics ID', type: 'string' }),
    defineField({ name: 'gtmId', title: 'Google Tag Manager ID', type: 'string' }),
    defineField({ name: 'pixelId', title: 'Meta Pixel ID', type: 'string' }),
  ],
})