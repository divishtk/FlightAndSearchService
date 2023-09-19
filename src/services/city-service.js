const { cityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new cityRepository();
  }

  async createCity(data) {
    try {
      console.log("create service", data);
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      console.log("delete Service ", cityId);
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    // data is passed as an object  {name:"Mumbai"}
    try {
      const city = this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getCity(id) {
    try {
      const cityDetails = this.cityRepository.getCity(id);
      return cityDetails;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }


  async getAllCities(filter) {
    try {
      const cities = this.cityRepository.getAllCities({name:filter.name});
      return cities;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

}
module.exports = CityService;
