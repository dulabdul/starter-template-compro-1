// sanity/schemaTypes/index.ts
import siteSettings from './siteSettings'
import companyInfo from './companyInfo'
import service from './service'
import aboutUs from './aboutUs'

// Pastikan ketiganya adalah hasil dari defineType({ ... })
export const schemaTypes = [siteSettings, companyInfo, service, aboutUs]