const llenarTablaCursosTutor = (data) => {
  console.log(data);
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor"
    ).content,
    $tbody = document.getElementById("tbody-table-cursos-tutor");

  data.forEach((formacion) => {
    $template.querySelector("tr").innerHTML = `
                  <td>${formacion.id}</td>
                  <td style="overflow-x: auto; max-width: 300px;">${
                    formacion.nombre
                  }</td>
                  <td>${formacion.tipo_proceso}</td>
                  <td class="td-acciones">
                  <span class="material-symbols-outlined accion-ver-cohorte" title="Ver cohortes">visibility</span>
                  ${
                    formacion.tipo_proceso === "5"
                      ? '<span class="material-symbols-outlined index-modulos" title="Modulos">stacks</span>'
                      : formacion.tipo_proceso === "6"
                      ? '<span class="material-symbols-outlined index-modulos" title="Modulos">stacks</span>'
                      : ""
                  }
                  
                  </td>`;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbody.appendChild($fargmento);
  console.log(data);
};

export default llenarTablaCursosTutor;
