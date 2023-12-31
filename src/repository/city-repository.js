const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      console.log("repository city", name);
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
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
      /*  // this code is supported in Pstgre DB below code will work but will not return updated obj for MYSQL.
              const cityUpdate = await City.update(data, {
              where: {
                id: cityId,
              },
            });*/
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong at repsitory layer");
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

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities ;
      }

      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
