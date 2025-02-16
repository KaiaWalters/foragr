import axios from 'axios'


const url =' http://localhost:3001/companies'

export const getAllCompanies = async () => {
    await axios
    .get(url)
    .then(response => {
        let data = response.status == 200 ? response.data : []
        return data
    }).catch(error => {
        return new Error(error.message)
    })
}

export const deleteAllCompanies = () => {
    axios.delete(url)
    .then((response) => {
        return response.data
    }).catch(error => {
        let errorMessage = new Error(error.message)
        console.log(errorMessage)
    }) 
}

export const deleteOneCompany = () => {
    axios.delete(url)
    .then((response) => {
        return response.data
    }).catch(error => {
        let errorMessage = new Error(error.message)
        console.log(errorMessage)
    })
}


const updateExistingCompany = () => {
    console.log("update")
}
