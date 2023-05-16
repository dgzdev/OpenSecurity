/**
 * @name Callback
 * @description When api returns something
 * @param {} data 
 */
var OnCallback = async (data) => {
    console.log(data)
}

fetch("/api/v1/")
	.then((response) => response.json())
	.then(async (data) => await OnCallback(data))           
	.catch((error) => console.error(error));
