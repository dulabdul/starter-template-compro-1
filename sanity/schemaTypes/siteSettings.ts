// sanity/schemaTypes/siteSettings.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings & SEO',
  type: 'document',
  fieldsets: [
    { name: 'general', title: 'General Info' },
    { name: 'seo', title: 'Advanced SEO Options' },
    { name: 'social', title: 'Social Media Sharing (OG & Twitter)' },
    { name: 'tracking', title: 'Analytics & Tracking' },
  ],
  fields: [
    // --- GENERAL ---
    defineField({ name: 'title', title: 'Site Brand / Name', type: 'string', fieldset: 'general' }),
    defineField({ 
      name: 'siteUrl', 
      title: 'Site Live URL', 
      type: 'url', 
      description: 'URL utama website untuk kebutuhan Canonical Link (contoh: https://corpbrand.com)',
      fieldset: 'general' 
    }),

    // --- SEO ---
    defineField({ 
      name: 'seoTitleSuffix', 
      title: 'SEO Title Suffix', 
      type: 'string', 
      description: 'Teks tambahan di setiap judul tab browser (contoh: " | Best Corporate Agency")',
      fieldset: 'seo' 
    }),
    defineField({ name: 'description', title: 'Global Meta Description', type: 'text', fieldset: 'seo' }),
    defineField({ name: 'keywords', title: 'Meta Keywords', type: 'string', description: 'Pisahkan dengan koma (contoh: agency, digital, corporate)', fieldset: 'seo' }),
    defineField({ 
      name: 'allowIndexing', 
      title: 'Allow Search Engine Indexing', 
      type: 'boolean', 
      initialValue: true,
      description: 'MATIKAN jika website masih dalam tahap testing/staging agar tidak diindeks Google (menambah tag noindex).',
      fieldset: 'seo' 
    }),

    // --- SOCIAL SHARING ---
    defineField({ 
      name: 'ogImage', 
      title: 'Global Share Image (Open Graph)', 
      type: 'image', 
      options: { hotspot: true },
      description: 'Gambar yang muncul saat link web dibagikan ke WhatsApp, FB, LinkedIn. Rekomendasi rasio: 1200x630px.',
      fieldset: 'social' 
    }),
    defineField({ name: 'twitterHandle', title: 'Twitter Handle', type: 'string', description: 'Contoh: @corpbrand', fieldset: 'social' }),

    // --- TRACKING ---
    defineField({ name: 'googleSiteVerification', title: 'Google Site Verification Code', type: 'string', fieldset: 'tracking' }),
    defineField({ name: 'gaId', title: 'Google Analytics ID (G-XXXXX)', type: 'string', fieldset: 'tracking' }),
    defineField({ name: 'gtmId', title: 'Google Tag Manager ID', type: 'string', fieldset: 'tracking' }),
    defineField({ name: 'pixelId', title: 'Meta Pixel ID', type: 'string', fieldset: 'tracking' }),
  ],
})