import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  // Menambahkan fieldset 'contact'
  fieldsets: [
    { name: 'general', title: 'General Information' },
    { name: 'hero', title: 'Hero Section Settings' },
    { name: 'contact', title: 'Contact Section Settings' },
  ],
  fields: [
    // --- GENERAL INFO ---
    defineField({ name: 'companyName', title: 'Company Name', type: 'string', fieldset: 'general' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', fieldset: 'general' }),
    defineField({ name: 'address', title: 'Address', type: 'text', fieldset: 'general' }),
    defineField({ name: 'mapsLink', title: 'Google Maps Embed URL', type: 'url', fieldset: 'general' }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string', fieldset: 'general' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number (Phone)', type: 'string', fieldset: 'general' }),
    defineField({ 
      name: 'whatsappMessage', 
      title: 'WhatsApp Pre-filled Message', 
      type: 'text', 
      fieldset: 'general',
      description: 'Pesan otomatis yang akan muncul saat pengunjung mengklik tombol WhatsApp.',
      initialValue: 'Halo! Saya tertarik dengan layanan yang Anda tawarkan.'
    }),
    // --- HERO SECTION ---
    defineField({ 
      name: 'heroImage', 
      title: 'Hero Image', 
      type: 'image', 
      options: { hotspot: true },
      fieldset: 'hero' 
    }),
    defineField({ 
      name: 'heroHeadline', 
      title: 'Hero Headline', 
      type: 'string', 
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

    // --- CONTACT SECTION ---
    defineField({ 
      name: 'contactHeading', 
      title: 'Contact Heading', 
      type: 'string', 
      fieldset: 'contact',
      initialValue: 'Contact us'
    }),
    defineField({ 
      name: 'contactImage', 
      title: 'Contact Image (Left Side)', 
      type: 'image', 
      options: { hotspot: true },
      fieldset: 'contact' 
    }),
  ],
})