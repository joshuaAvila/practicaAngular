

export interface ProductoResponse{
    ok: boolean,
    id?: string,
    name?: string,
    description?: string,
    precio?: string,
    msg?: string
}

export interface Productos{
    id?:string,
    name?:string,
    description?: string,
    precio?: string
}
