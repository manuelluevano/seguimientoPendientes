const Pendiente = ({ item, setPendienteEdit, eliminarPendientes }) => {
  const { pendiente, nombre, numero, precio, fecha, status } = item;

  const handleEliminar = () => {
    //VERIFICAR
    console.log(item.id);
    const confirm = window.confirm("Se termino correctamente?");

    if (confirm) {
      eliminarPendientes(item.id);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pendiente: {""}
        <span className="font-normal normal-case">{pendiente}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Cliente: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Numero Cliente: {""}
        <span className="font-normal normal-case">{numero}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Precio: ${""}
        <span className="font-normal normal-case">{precio}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <div className="flex  ">
        <p className="font-bold  text-gray-700 uppercase">Estado: </p>
        <p className="font-bold  text-gray-700 uppercase">
          {status ? (
            <h1 className="text-green-700  normal-case ml-2 ">
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
          className="py-2 px-10 bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase rounded-lg"
          onClick={() => setPendienteEdit(item)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Terminado
        </button>
      </div>
    </div>
  );
};

export default Pendiente;
