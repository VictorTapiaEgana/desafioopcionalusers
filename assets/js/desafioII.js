const UserData = document.getElementById('user-data');
 let lista = '';

const Datos = (() => {
    return {
        MostrarDatos: async () => {
            let respuesta = await fetch('https://randomuser.me/api/?results=10');
            let respuestaJSON = await respuesta.json();            

           
             respuestaJSON.results.forEach(userData =>{
                    lista += `<p>
                                <ul>                                
                                    <img src="${userData.picture.large}" alt="imagen de ${userData.name.first}">                                
                                    <li><strong> ${userData.name.first} ${userData.name.last}</strong></li>
                                    <li> ${userData.email}</li>
                                    <li> ${userData.cell}</li>
                                </ul> 
                              </p>`

             })

             UserData.innerHTML = (lista)
        }
    };
})();

document.addEventListener('DOMContentLoaded', () => {

    Datos.MostrarDatos();

});