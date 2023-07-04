import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listServicios } from "./graphql/queries";

Amplify.configure(awsconfig);

function App() {
  const [pendienteObj, setPendienteObj] = useState([]);
  const [pendienteEdit, setPendienteEdit] = useState({});
  const [reload, setReload] = useState(false);

  // const eliminarPendientes = (pendienteDelete) => {
  //   console.log("Eliminar", pendienteDelete);

  //   const pendientesActualizados = pendienteObj.filter(
  //     (pendienteActualizado) => pendienteActualizado.id !== pendienteDelete
  //   );

  //   console.log(pendientesActualizados);
  //   setPendienteObj(pendientesActualizados);
  // };

  //OBTENER LOS SERVICIOS DE LA DB
  useEffect(() => {
    (async () => {
      const { data } = await API.graphql(graphqlOperation(listServicios));

      setPendienteObj(data.listServicios.items);

      console.log(data.listServicios.items);
      console.log("RELOAD");
      setReload(false);
    })();
  }, [reload]);

  console.log("OBJETO CREADO", pendienteObj);

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
            setReload={setReload}
          />
          <ListaTareas
            pendienteObj={pendienteObj}
            setPendienteEdit={setPendienteEdit}
            setPendienteObj={setPendienteObj}
            setReload={setReload}
          />
        </div>
      </div>
    </>
  );
}

export default App;
