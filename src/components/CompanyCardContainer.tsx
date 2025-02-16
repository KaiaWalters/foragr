import React from 'react'
import { CompanyCardContainerProps } from '../types/company'
import {deleteAllCompanies, deleteOneCompany, updateExistingCompany} from '../services/companies'

const handleDelete = () => {

}

const handleUpdate = () => {

}

const CompanyCardContainer = ({companies}: CompanyCardContainerProps) => {
    if(companies.length > 0) {
      companies.map((company) => {
        return (
          <div key={company.key}>
            <h5>{company.name}</h5>
            <span>{company.description}</span>
            <button onClick={() => handleDelete}>Remove</button>
            <button onClick={() => handleUpdate}>Update</button>
          </div>
        )
      })
    }
}

export default CompanyCardContainer