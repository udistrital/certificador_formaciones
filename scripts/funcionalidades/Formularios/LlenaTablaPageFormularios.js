const llenarTablaPageFormularios = (li) => {
  console.log(li);
  // debugger;
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById("template-renglon-formaciones-generales").content,
    $tbodyFormacionesGenerales = document.getElementById("tbody-table-formaciones-generales");
  $tbodyFormacionesGenerales.innerHTML = "";

  li.forEach((formacion) => {
    $template.querySelector("tr").innerHTML = `
        <td>${formacion.id_proceso}) ${formacion.nombre_proceso}${formacion.nombre_modulo === undefined || formacion.nombre_modulo === "No registra" ? "" : " - " + formacion.nombre_modulo}</td>
        <td>${formacion.nombre_tipo_proceso}</td>
        <td>${formacion.cohorte}-${formacion.id_cohorte}</td>
        <td>${formacion.anio}</td>
        <td>${formacion.fecha_inicial}</td>
        <td>${formacion.fecha_final}</td>
        <td class="td-acciones">
        <span
        class="material-symbols-outlined index-asistencias"
        title="Ver link información cohorte"
        >
        link
        </span>
        </td>`;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbodyFormacionesGenerales.appendChild($fargmento);
};

export default llenarTablaPageFormularios;
