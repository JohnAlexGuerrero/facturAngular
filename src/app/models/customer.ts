export interface Customer {
    id: string,
    identification: string,
    dv: string,  // (opcional) Dígito de verificación. Requerido si el cliente se identifica con Nit
    company: string, // (opcional) Razón social. Obligatorio si el cliente es persona juridica
    trade_name: string, // (opcinal) Nombre comercial
    names: string, // (opcional) Nombre del cliente, solo aplica para clientes que son personas naturales
    address: string,  
    phone: string,
    email: string,
    legal_organization_id: string, // ID que corresponda al tipo de organización
    tribute_id: string, // ID de tributo
    identification_document_id: string,
    municipality_id: string,
}
