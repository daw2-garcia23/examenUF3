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
`
}