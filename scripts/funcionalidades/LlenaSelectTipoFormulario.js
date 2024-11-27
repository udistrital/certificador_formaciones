import listaFormularios from "../Fetching/GET/ListaFormularios.js";

const llenaSelectNewForm = async (cohorte) => {
  const tiposFormularios = await listaFormularios();
  // console.log(cohorte);
  console.log(tiposFormularios);

  const select = document.getElementById("input-select-tipo-form");

  switch (cohorte.nombre_tipo_proceso) {
    case "Curso con tutor":
      select.innerHTML = "";
      select.appendChild(crearOpcionDefault());

      for (let index = 0; index < tiposFormularios.length; index++) {
        const nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = tiposFormularios[index].id; // Asigna el valor
        nuevaOpcion.textContent = tiposFormularios[index].nombre; // Asigna el texto
        select.appendChild(nuevaOpcion); // Agrega la opción al select
        if (index === 1) {
          break;
        }
      }
      break;
    case "Diplomado":
      select.innerHTML = "";
      select.appendChild(crearOpcionDefault());
      for (let index = 0; index < tiposFormularios.length; index++) {
        const nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = tiposFormularios[index].id; // Asigna el valor
        nuevaOpcion.textContent = tiposFormularios[index].nombre; // Asigna el texto
        select.appendChild(nuevaOpcion); // Agrega la opción al select
        if (index === 1) {
          break;
        }
      }
      break;
    case "Curso MOOC":
      select.innerHTML = "";
      select.appendChild(crearOpcionDefault());
      for (let index = 0; index < tiposFormularios.length; index++) {
        const nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = tiposFormularios[index].id; // Asigna el valor
        nuevaOpcion.textContent = tiposFormularios[index].nombre; // Asigna el texto
        select.appendChild(nuevaOpcion); // Agrega la opción al select
        if (index === 0) {
          break;
        }
      }
      break;
    case "Capacitacion o taller":
      select.innerHTML = "";
      select.appendChild(crearOpcionDefault());
      for (let index = 0; index < tiposFormularios.length; index++) {
        const nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = tiposFormularios[index].id; // Asigna el valor
        nuevaOpcion.textContent = tiposFormularios[index].nombre; // Asigna el texto
        select.appendChild(nuevaOpcion); // Agrega la opción al select
        if (index === 1) {
          break;
        }
      }
      break;
    default:
      select.innerHTML = "";
      select.appendChild(crearOpcionDefault());
      for (let index = 0; index < tiposFormularios.length; index++) {
        const nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = tiposFormularios[index].id; // Asigna el valor
        nuevaOpcion.textContent = tiposFormularios[index].nombre; // Asigna el texto
        select.appendChild(nuevaOpcion); // Agrega la opción al select
        if (window.location.pathname.includes("EventosModulos") && index === 1) {
          break;
        }
      }
      break;
  }
};

const crearOpcionDefault = () => {
  const opciondefault = document.createElement("option");
  opciondefault.value = "";
  opciondefault.textContent = "Tipo de formulario";
  return opciondefault;
};

export default llenaSelectNewForm;
