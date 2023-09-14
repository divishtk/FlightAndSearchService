const { cityRepository } = require("../repository/index");

class CityService {

    constructor(){

        this.cityRepository = new cityRepository();
    }

    async createCity(data) {
        try {
          const city = await this.cityRepository.createCity(data);
          return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
          throw { error };
        }
      }
    
      async deleteCity( cityId ) {
        try {
            const city = await this.cityRepository.deleteCity(cityId)
          return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
          throw { error };
        }
      }
    
      async updateCity(cityId, data) {   // data is passed as an object  {name:"Mumbai"}
        try {
         const city = this.cityRepository.updateCity(cityId,data);
         return city;
        } catch (error) {

            console.log("Something went wrong at service layer");
            throw {error};
        }
      }
    
      async getCity(cityId) {
        try {
          const cityDetails = this.cityRepository.getCity(cityId)
          return cityDetails;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
      }
}
