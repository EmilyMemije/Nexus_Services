 /**Se declaro una constante y llamo el boton de mi HTML para poder abrir  el modal
  * de la misma forma para cerrarlo, y el modal
 */

 const btnAbrirModal = document.querySelector("#registro");
 const btnCerrarModal = document.querySelector("#seleccion");
 const btnUsuario = document.getElementById('seleccion--usuario');
 const btnEspecialista = document.getElementById('seleccion--especialista');
const modal = document.querySelector("#miModal")

/*Ahora agrego el evento listener para que al dar click abra o cierre el modal con una funcion flecha */

btnAbrirModal.addEventListener("click", () => {
    modal.showModal();
})

// btnCerrarModal.addEventListener("click", () => {
//     modal.close();
// })

document.getElementById('btnUsuario').addEventListener('submit', function(event) {
    event.preventDefault();
    event.target.submit();
});

document.getElementById('btnProveedor').addEventListener('submit', function(event) {
    event.preventDefault();
    event.target.submit();
});