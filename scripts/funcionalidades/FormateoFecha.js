const formatearFecha = (fecha) => {
  // console.log(fecha);
  let now = new Date(fecha);
  // Obtener el año, mes, día, horas, minutos y segundos
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Formatear la fecha y hora en el formato deseado
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  // console.log(formattedDate);
  return formattedDate;
};

export default formatearFecha;
