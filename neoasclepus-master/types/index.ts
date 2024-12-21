// customer type 
export interface ICustomer {
    name: string,
    email: string,
    avatar: ImageType,
}


export interface IDistributor extends ICustomer {
    phone: number,
    address: string
}

// product type
export interface IProduct {
    id: string,
    name: string,
    images: ImageType[],
    category: Category,
    description: string,
    slug: string,
    price: number,
    specifications?: SpecificationType[]
}

// category type 
export type Category = {
    id: string,
    name: string,
    image: ImageType
    products: IProduct[]
}

// image type 
export type ImageType = {
    id?: string,
    url: string
}

export type SpecificationType = {
    name: string,
    value: string
}

export type Banner = {
    id: string,
    title: string,
    image: ImageType
}