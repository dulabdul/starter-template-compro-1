import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  // Fieldsets membantu merapikan dashboard admin menjadi beberapa bagian
  fieldsets: [
    { name: 'general', title: 'General Information' },
    { name: 'hero', title: 'Hero Section Settings' },
  ],
  fields: [
    // --- GENERAL INFO ---
    defineField({ name: 'companyName', title: 'Company Name', type: 'string', fieldset: 'general' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', fieldset: 'general' }),
    defineField({ name: 'address', title: 'Address', type: 'text', fieldset: 'general' }),
    defineField({ name: 'mapsLink', title: 'Google Maps Embed URL', type: 'url', fieldset: 'general' }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string', fieldset: 'general' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string', fieldset: 'general' }),

    // --- HERO SECTION ---
    defineField({ 
      name: 'heroImage', 
      title: 'Hero Image', 
      type: 'image', 
      options: { hotspot: true }, // Memungkinkan klien mengatur titik fokus gambar
      fieldset: 'hero' 
    }),
    defineField({ 
      name: 'heroHeadline', 
      title: 'Hero Headline', 
      type: 'string', 
      // Memberi petunjuk ke klien cara membuat teks berwarna biru
      description: 'Gunakan tag <span> untuk teks highlight. Contoh: Membangun Masa Depan <span>Bersama Kami</span>',
      fieldset: 'hero' 
    }),
    defineField({ 
      name: 'heroSubHeadline', 
      title: 'Hero Sub-Headline', 
      type: 'text', 
      fieldset: 'hero' 
    }),
    defineField({ 
      name: 'heroCtaPrimary', 
      title: 'Primary CTA Text', 
      type: 'string', 
      fieldset: 'hero',
      initialValue: 'Lihat Layanan Kami'
    }),
    defineField({ 
      name: 'heroCtaSecondary', 
      title: 'Secondary CTA Text', 
      type: 'string', 
      fieldset: 'hero',
      initialValue: 'Hubungi Kami'
    }),
  ],
})