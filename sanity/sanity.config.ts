import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Corporate Starter CMS',

  // Ambil ID dari .env yang sudah kita buat tadi
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,

  // Sesuaikan dengan rute yang kita buat di Astro
  basePath: '/admin',

  plugins: [
    // structureTool untuk mengatur tampilan menu di sidebar
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Manager')
          .items([
            // 1. Singleton: Site Settings (Hanya boleh ada 1)
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            
            // 2. Singleton: Company Info (Hanya boleh ada 1)
            S.listItem()
              .title('Company Information')
              .id('companyInfo')
              .child(
                S.document()
                  .schemaType('companyInfo')
                  .documentId('companyInfo')
              ),

            S.divider(), // Pembatas visual

            // 3. Regular Document: Services (Bisa tambah banyak)
            ...S.documentTypeListItems().filter(
              (listItem) => !['siteSettings', 'companyInfo'].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(), // Tool untuk ngetes query GROQ langsung di admin
  ],

  schema: {
    types: schemaTypes,
  },
})