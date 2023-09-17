const { City } = require("../models/index");

class CityRepository {
  async createCity({name}) {
    try {
        console.log('repository city',name);
      const city = await City.create({name});
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw {error};
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    // data is passed as an object  {name:"Mumbai"}
    try {
      const cityUpdate = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return cityUpdate;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getCity(id) {
    try {
      const city = await City.findByPk(id);
      return city;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
