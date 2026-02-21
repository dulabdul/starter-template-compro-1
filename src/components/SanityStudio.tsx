// src/components/SanityStudio.tsx
import { Studio, defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../../sanity/schemaTypes';

const config = defineConfig({
  name: 'default',
  title: 'Corporate Starter CMS',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  basePath: '/admin',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Manager')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Company Information')
              .id('companyInfo')
              .child(S.document().schemaType('companyInfo').documentId('companyInfo')),
            S.listItem()
              .title('About Us Section')
              .id('aboutUs')
              .child(S.document().schemaType('aboutUs').documentId('aboutUs')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['siteSettings', 'companyInfo', 'aboutUs'].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

export default function SanityStudio() {
  return (
    /* Memaksa container ini mengambil seluruh viewport secara absolut */
    <div style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0 }}>
      <Studio config={config} />
    </div>
  );
}