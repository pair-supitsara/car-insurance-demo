import database from '../database/database.js'

const business = {

    async bfnGetuserinfo() {
    
        return await database.dfnGetuserinfo()
    }
}

export default business