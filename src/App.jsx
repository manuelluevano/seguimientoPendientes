import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

function App() {
  const [pendienteObj, setPendienteObj] = useState([]);
  const [pendienteEdit, setPendienteEdit] = useState({});

  const eliminarPendientes = (pendienteDelete) => {
    console.log("Eliminar", pendienteDelete);

    const pendientesActualizados = pendienteObj.filter(
      (pendienteActualizado) => pendienteActualizado.id !== pendienteDelete
    );

    console.log(pendientesActualizados);
    setPendienteObj(pendientesActualizados);
  };

  console.log("objeto", pendienteObj);
  return (
    <>
      <div className="container mx-auto">
        <Header />

        <div className="mt-12 md:flex">
          <Formulario
            setPendienteObj={setPendienteObj}
            pendienteObj={pendienteObj}
            pendienteEdit={pendienteEdit}
            setPendienteEdit={setPendienteEdit}
          />
          <ListaTareas
            pendienteObj={pendienteObj}
            setPendienteEdit={setPendienteEdit}
            eliminarPendientes={eliminarPendientes}
          />
        </div>
      </div>
    </>
  );
}

export default App;
