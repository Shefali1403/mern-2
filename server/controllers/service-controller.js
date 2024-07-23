const Service = require("../models/service-model");

const services = async (req, res) => {
    try {
        const response = await Service.find();

        if (response && response.length > 0) {
            res.status(200).json({ message: response });
        } else {
            res.status(400).json({ message: "No services found" });
        }
        
    } catch (error) {
        console.log(`services error ${error}`);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = services;
