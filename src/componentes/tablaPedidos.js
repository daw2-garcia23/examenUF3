export const tabla = {
    template: `
    <table class="table container mt-5 shadow" style="margin-left: 18em;">
  <thead class="container-fluid">
    <tr>
      <th scope="col">Cerveza</th>
      <th scope="col">Cantidad</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Estrella Galicia</td>
      <td>2</td>
      <td>
      <button type="button" class="btn btn-danger">Eliminar</button>
      </td>
      <td>
      <button type="button" class="btn btn-warning">Editar pedido</button>
      </td>
    </tr>
    <tr>
      <td>Voll Damm</td>
      <td>1</td>
      <td>
      <button type="button" class="btn btn-danger">Eliminar</button>
      </td>
      <td>
      <button type="button" class="btn btn-warning">Editar pedido</button>
      </td>
    </tr>
  </tbody>
</table>
`,
script: ()=>{

//Eliminar
const botonEliminar = document.querySelectorAll('.btn-danger'); //selecciono todos los botones de eliminar a través de la propia clase que tienen de bootstrap
console.log('Has entrado en eliminar');
botonEliminar.forEach(boton => { //utilizo el foreach para recorrer toda la tabla
  boton.addEventListener('click', () => { const fila = boton.parentElement; //con evento click escogeremos la fila que se quiere borrar
    fila.remove(); // quitamos de la tabla lo seleccionado
  });
  console.log('Eliminado correctamente');
});

//Editar
const botonesEditar = document.querySelectorAll('.btn-warning');//selecciono todos los botones de editar a través de la propia clase que tienen de bootstrap
console.log('Has entrado en editar');
botonesEditar.forEach(boton => { //utilizo el foreach para recorrer toda la tabla
  boton.addEventListener('click', () => { //con evento click escogeremos la fila que se quiere editar
    const fila = boton.parentElement; // Obtenemos la fila correspondiente al botón
    const cerveza = fila.children[0].textContent; // Obtenemos el nombre de la cerveza
    const cantidad = fila.children[1].textContent; // Obtenemos la cantidad de cervezas
    const nuevoModelo = prompt(`Editar modelo de ${cerveza}`, cerveza); // Pedimos al usuario la nueva cantidad de cervezas
    const nuevaCantidad = prompt(`Editar cantidad de ${cerveza}`, cantidad); // Pedimos al usuario la nueva cantidad de cervezas
    if (nuevaCantidad != null || nuevoModelo != null) { // Si decide actualizar cumple la condición
      fila.children[0].textContent = nuevoModelo; // Se actualizan los datos en la tabla
      fila.children[1].textContent = nuevaCantidad; // Se actualizan los datos en la tabla
    }
  });
  console.log('Editado correctamente');
});
}
}