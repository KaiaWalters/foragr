interface Company {
    key: number, 
    name: string, 
    description: string, 
  }
  
  interface CompanyCardContainerProps {
    companies: [Company]
  }
  
  export type {
    CompanyCardContainerProps, 
    Company
}