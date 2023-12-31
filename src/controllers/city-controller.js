const { CityService } = require('../services/index')

const cityService = new CityService();

const create = async (req, resp) => {
    try {
        const city = await cityService.createCity(req.body);
        return resp.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            error: {},
        });
    } catch (error) {
        
        return resp.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error,
        });
    }
};

const destroy = async(req, resp) => {
    try {
        const response = await cityService.deleteCity(req.params.id)
        return resp.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            error: {},
        });
    } catch (error) {
        return resp.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error,
        });
    }
};

const update = async(req, resp) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body)
        return resp.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a city",
            error: {},
        });

    } catch (error) {
        return resp.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a city",
            err: error,
        });
    }
};

const get = async (req, resp) => {
    try {
        const response = await cityService.getCity(req.params.id)
        console.log(response);
        return resp.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a city",
            error: {},
        });

    } catch (error) {
        return resp.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch a city",
            err: error,
        });
    }
};

const getAll = async (req,resp)=>{
    try {
        console.log(req.params)
        const response = await cityService.getAllCities(req.query);
        return resp.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all cities",
            error: {},
        });


    } catch (error) {
        console.log(error)
        return resp.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all the cities",
            err: error,
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};
