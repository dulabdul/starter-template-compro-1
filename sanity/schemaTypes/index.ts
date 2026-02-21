// sanity/schemaTypes/index.ts
import siteSettings from './siteSettings'
import companyInfo from './companyInfo'
import service from './service'
import aboutUs from './aboutUs'
import cultures from './cultures'
import servicesSection from './servicesSection'



// Pastikan ketiganya adalah hasil dari defineType({ ... })
export const schemaTypes = [siteSettings, companyInfo, service, aboutUs, cultures,servicesSection]