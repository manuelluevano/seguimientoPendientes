/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServicios = /* GraphQL */ `
  query GetServicios($id: ID!) {
    getServicios(id: $id) {
      id
      servicio
      nombreCliente
      modeloMarca
      telefono
      precio
      fecha
      folio
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listServicios = /* GraphQL */ `
  query ListServicios(
    $filter: ModelServiciosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        servicio
        nombreCliente
        modeloMarca
        telefono
        precio
        fecha
        folio
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
