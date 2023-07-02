import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({
  pendienteObj,
  setPendienteObj,
  pendienteEdit,
  setPendienteEdit,
}) => {
  const [pendiente, setPendiente] = useState("");
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [precio, setPrecio] = useState("");
  const [fecha, setFecha] = useState("");
  const [status, setStatus] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pendienteEdit).length > 0) {
      console.log(pendienteEdit.pendiente);
      setPendiente(pendienteEdit.pendiente);
      setNombre(pendienteEdit.nombre);
      setNumero(pendienteEdit.numero);
      setPrecio(pendienteEdit.precio);
      setFecha(pendienteEdit.fecha);
    } else {
      console.log("No hay nada");
    }
  }, [pendienteEdit]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if ([pendiente, nombre, numero, precio, fecha].includes("")) {
      console.log("Hay campos vacios");
      setError(true);
      return;
    }
    setError(false);

    // console.log("Enviando Formulario");

    //crear objeto
    const objetoPendiente = {
      pendiente,
      nombre,
      numero,
      precio,
      fecha,
      status,
    };

    //REVISAR SI VAMOS A EDITAR O AGREGAR

    if (pendienteEdit.id) {
      //EDITANDO EL REGISTRO
      console.log("Editando", pendienteEdit.id);

      //agregar id del obj a editar al objeto
      objetoPendiente.id = pendienteEdit.id;
      const pendienteActualizado = pendienteObj.map((pendienteState) =>
        pendienteState.id === pendienteEdit.id
          ? objetoPendiente
          : pendienteState
      );
      setPendienteObj(pendienteActualizado);

      setPendienteEdit({});
    } else {
      //AGREGANDO EL REGISTRO
      console.log("Agregando");
      objetoPendiente.id = generarId();
      setPendienteObj([...pendienteObj, objetoPendiente]);
    }

    // console.log(objetoPendiente);

    //reiniciar el formulario
    setPendiente("");
    setNombre("");
    setNumero("");
    setPrecio("");
    setFecha("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Agregar <span className="text-orange-700 font-bold ">pendientes</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-lg py-10 px-5"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="tarea"
            className="block font-bold text-gray-700 uppercase"
          >
            Pendiente / Servicio
          </label>
          <input
            id="tarea"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Pendiente"
            value={pendiente}
            onChange={(e) => setPendiente(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre Cliente
          </label>
          <input
            id="nombre"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del cliente"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="numero"
            className="block font-bold text-gray-700 uppercase"
          >
            Numero Cliente
          </label>
          <input
            id="numero"
            type="number"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Numero cliente"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="precio"
            className="block font-bold text-gray-700 uppercase"
          >
            Precio
          </label>
          <input
            id="precio"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Precio de Servicio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block font-bold text-gray-700 uppercase"
          >
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-orange-600 w-full text-white uppercase font-bold p-3 hover:bg-orange-700 cursor-pointer transition-colors"
          value={pendienteEdit.id ? "Editar Pendiente" : "Agregar "}
        />
      </form>
    </div>
  );
};

export default Formulario;
