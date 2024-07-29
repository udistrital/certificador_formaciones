const llenarTablaModulos = (data) => {
  console.log(data);
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor"
    ).content,
    $tbody = document.getElementById("tbody-table-cursos-tutor");

  data.forEach((modulo) => {
    $template.querySelector("tr").innerHTML = `
                  <td>${modulo.id}</td>
                  <td style="overflow-x: auto; max-width: 300px;">${modulo.nombre}</td>
                  <td>${modulo.proceso}</td>
                  <td>${modulo.proceso}</td>
                  `;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbody.appendChild($fargmento);
  console.log(data);
};

export default llenarTablaModulos;
