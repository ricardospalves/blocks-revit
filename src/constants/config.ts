export const CONFIG = {
  COMPANY_SHORT_NAME: 'Blocks',
  get COMPANY_NAME() {
    return `${this.COMPANY_SHORT_NAME} Revit`
  },
} as const
