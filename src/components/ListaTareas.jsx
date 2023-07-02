import Pendiente from "./Pendiente";

const ListaTareas = ({
  pendienteObj,
  setPendienteEdit,
  eliminarPendientes,
}) => {
  // console.log("lista Pendientes", pendienteObj.pendienteObj.length);

  return (
    <div className="md:w-1/2 lg:w-3/5 mt-10 h-screen md:overflow-y-scroll">
      {pendienteObj && pendienteObj.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Pendientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-orange-600 font-bold ">pendientes</span>
          </p>

          {pendienteObj.map((item) => {
            return (
              <>
                <Pendiente
                  key={item.id}
                  item={item}
                  setPendienteEdit={setPendienteEdit}
                  eliminarPendientes={eliminarPendientes}
                />
              </>
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pendiente</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Agregar tus{" "}
            <span className="text-orange-700 font-bold ">pendientes</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaTareas;
