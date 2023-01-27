export interface IFoodOptionsTypesItems {
    tite: string;
    subItem: {
        qty: number;
        title: string;
        price: number;
    };
}

export interface IFoodOptionsTypes {
    title: string;
    item: Array<IFoodOptionsTypesItems>;
}

export interface IFoodOptions {
    types: Array<IFoodOptionsTypes>;
}

export interface IFood {
    title: string;
    options?: Array<IFoodOptions>;
}