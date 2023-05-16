const { version, lastupd } = require("../config/data.json");
const express = require("express")

/**
 * @description Controlador para a rota inicial.
 */
const home = (req, res) => {
	res.sendFile("index.html", { root: "public" });
};
const about = (req, res) => {
	res.sendFile("about.html", { root: "public" });
};
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const apiData = (req, res) => {
    var ip = req.ip
    console.log(ip)

	const data = {
		success: true,

		// Show the API version and lastupd with a string in message param
		message: `API version ${version} last updated at ${lastupd}`,
	};

	res.json(data);
};

const APIREQUESTS = {
    "api/v1/": apiData
}



module.exports = {
	home,
	about,
	apiData,
};
