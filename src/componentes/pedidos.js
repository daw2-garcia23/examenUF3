import { cervezas } from "./bd";
import { tabla } from "./tablaPedidos";

export const pedidos = {
  template: `
  <div class="container">
  <div class="container-fluid">
    <form class="mx-5 shadow mt-5" style="width: 80rem;">
    <div class="d-flex container">
        <div class="container-fluid m-5">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nombre del grupo</label>
            <input type="text" class="form-control" id="equipo" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Mesa</label>
            <input type="number" class="form-control" id="mesa">
        </div>
        <div class="mb-3">
            <select class="form-select" id="cervezas" aria-label="Default select example">
                <option selected>--- Selecciona tu birra ---</option>
                <option value="1">Mahou Cinco Estrellas</option>
                <option value="2">Estrella Galicia</option>
                <option value="3">Alhambra Reserva 1925</option>
                <option value="3">San Miguel Especial</option>
                <option value="3">Damm Estrella</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">¿Cuántas traigo?</label>
            <input type="number" class="form-control" id="mesa">
        </div>
        <div class="d-grid gap-2">
            <button class="btn btn-success" type="button" id="add">Añadir pedido</button>
        </div>
        </div>
        <div class="card m-5" style="width: 18rem;">
            <div class="card-body" id="cardi">
                <h5 class="card-title">Nombre de la cerveza</h5>
                <p class="card-text">Cerveza.....</p>
            </div>
            <img src="..." class="card-img-top" alt="...">
        </div>
    </div>
</form>
</div>
</div>
`,
script: ()=>{
    const seleccion = document.querySelector("#cervezas")
    seleccion.addEventListener("change", (event) => {
        const posi = cervezas.findIndex(cerveza=>cerveza.id = event.target.value)
        const html=`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
               <h3 class="card-text">${cervezas[posi].nombre}</h3> 
                <p class="card-text">${cervezas[posi].descripcion}</p>
            </div>
            <img src="${cervezas[posi].imagen}" class="card-img-bottom">
        </div>
        `
        const descripcion = document.querySelector("#cardi")
        descripcion.innerHTML = html
    });
    
 }
};