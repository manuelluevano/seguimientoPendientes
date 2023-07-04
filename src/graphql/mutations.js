/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServicios = /* GraphQL */ `
  mutation CreateServicios(
    $input: CreateServiciosInput!
    $condition: ModelServiciosConditionInput
  ) {
    createServicios(input: $input, condition: $condition) {
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
export const updateServicios = /* GraphQL */ `
  mutation UpdateServicios(
    $input: UpdateServiciosInput!
    $condition: ModelServiciosConditionInput
  ) {
    updateServicios(input: $input, condition: $condition) {
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
export const deleteServicios = /* GraphQL */ `
  mutation DeleteServicios(
    $input: DeleteServiciosInput!
    $condition: ModelServiciosConditionInput
  ) {
    deleteServicios(input: $input, condition: $condition) {
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
