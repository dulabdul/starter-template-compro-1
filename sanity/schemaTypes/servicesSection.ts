import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesSection',
  title: 'Services Section Config',
  type: 'document',
  fields: [
    defineField({ 
      name: 'heading', 
      title: 'Section Heading', 
      type: 'string',
      initialValue: 'What we do?'
    }),
    defineField({ 
      name: 'bottomText', 
      title: 'Bottom Description Text', 
      type: 'text',
      description: 'Teks panjang yang muncul di dalam kotak putih di bawah daftar layanan.'
    }),
  ],
})