import { API, graphqlOperation } from "aws-amplify";
import { updateServicios } from "../graphql/mutations";
import toTitleCase from "../helpers/index";

const Pendiente = ({ item, setPendienteEdit, setPendienteObj, setReload }) => {
  const {
    id,
    servicio,
    nombreCliente,
    modeloMarca,
    telefono,
    precio,
    fecha,
    folio,
    status,
  } = item;

  // const handleTerminar = () => {
  //   //VERIFICAR
  //   const confirm = window.confirm("Se termino correctamente?");

  //   if (confirm) {
  //     // console.log("SERVICIO ANTES DE REALIZAR:", item.id);

  //     //   //DESTRUCTURING
  //     const {
  //       servicio,
  //       nombreCliente,
  //       modeloMarca,
  //       telefono,
  //       precio,
  //       fecha,
  //       folio,
  //       status,
  //     } = item;
  //     // console.log("SERVICIO ANTES DE REALIZAR:", item);

  //     const objterminado = {
  //       fecha,
  //       id,
  //       modeloMarca,
  //       nombre,
  //       numero,
  //       nota,
  //       status: true,
  //       pendiente,
  //       precio,
  //     };

  //     console.log("SERVICIOS", pendienteObj);
  //     console.log("OBJETO EDIT", objterminado.id);

  //     //ACTUALIZAR EL ESTADO DEL SERVICIO
  //     const servicioTerminado = pendienteObj.map((terminado) => {
  //       // console.log("Servicios", terminado.id);

  //       if (terminado.id === objterminado.id) {
  //         console.log("ENCONTRADO", objterminado);

  //         return objterminado;
  //       }

  //       // terminado.id === objterminado.id ? [objterminado] : item;
  //     });

  //     console.log("Servicio encontrado:", servicioTerminado);

  //     // setPendienteObj(servicioTerminado);
  //   }
  // };

  const handleUpdate = async (item) => {
    console.log("Update", item.id);

    const confirm = window.confirm("Se termino correctamente?");

    if (confirm) {
      const data = await API.graphql(
        graphqlOperation(updateServicios, {
          input: {
            id,
            status: true,
          },
        })
      );
      console.log(data);

      setReload(true);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Modelo / Marca: {""}
        <span className="font-normal normal-case">
          {toTitleCase(modeloMarca)}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Servicio: {""}
        <span className="font-normal normal-case">{toTitleCase(servicio)}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Cliente: {""}
        <span className="font-normal normal-case">
          {toTitleCase(nombreCliente)}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Telefono: {""}
        <span className="font-normal normal-case">{telefono}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Precio: ${""}
        <span className="font-normal normal-case">{precio}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Folio: {""}
        <span className="font-normal normal-case">{folio}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <div className="flex  ">
        <p className="font-bold  text-gray-700 uppercase">Estado: </p>
        <p className="font-bold  text-gray-700 uppercase">
          {status ? (
            <h1 className="text-lime-700  normal-case ml-2 ">
              Entregado correctamente
            </h1>
          ) : (
            <h1 className="text-red-700  normal-case ml-2 ">
              Pendiente por entregar
            </h1>
          )}
        </p>
      </div>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          disabled
          className="py-2 px-10 bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase rounded-lg"
          onClick={() => setPendienteEdit(item)}
        >
          Editar
        </button>
        <button
          disabled={item.status}
          type="button"
          className={
            item.status
              ? ""
              : "py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          }
          onClick={() => handleUpdate(item)}
        >
          {item.status ? (
            <p className="text-red-500 text-3xl">✔️</p>
          ) : (
            "Terminado"
          )}
        </button>
      </div>
    </div>
  );
};

export default Pendiente;
