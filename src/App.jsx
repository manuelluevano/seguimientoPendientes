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
  const [MxDolar, setMxDolar] = useState();

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
      //Dolar
      precioDolar();

      const { data } = await API.graphql(graphqlOperation(listServicios));

      setPendienteObj(data.listServicios.items);

      // console.log(data.listServicios.items);
      // console.log("RELOAD");
      setReload(false);
    })();
  }, [reload]);

  //OBTENER PRECIO DOLAR
  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://api.exchangerate.host/latest?base=USD&symbols=MXN"
  //   );
  //   if (!response.ok) {
  //     throw new Error("Data coud not be fetched!");
  //   } else {
  //     return response.json();
  //   }
  // };
  // setMxDolar(fetchData);
  // console.log("Peso vs dolar", MxDolar);

  const precioDolar = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.exchangerate.host/latest?base=USD&symbols=MXN",
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setMxDolar(result))
      .catch((error) => console.log("error", error));
  };

  console.log("OBJETO CREADO", pendienteObj);

  return (
    <>
      <Header MxDolar={MxDolar} />
      <div className="container mx-auto">
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
