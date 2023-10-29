// se procesa la respuesta de la Api para obtener solo los datos que se necesitan en la DB
// la id y el nombre
const getData = (dataApi) =>{
    //se recorre toda la array de results que contiene los datos
    const data = dataApi.results.map( (element) => {
        //Se saca de la IP el Id de la api
        let arrUrl = element.url.split("/");
        let idApi = +arrUrl[arrUrl.length -2];
        // se guarda en la nueva array "data" los valores procesados
        return {name: element.name , idApi: idApi}
    })
    // Retorna el nuevo array 
    return data;
}
module.exports = {getData};
