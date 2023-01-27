
export interface IFoodItemOptions {
    pk: string,
    name: string,
    price: number,
    cartQty: number,
    img?: StaticImageData,
    type?: string
}

export interface IFoodItem {
    pk?: string | undefined,
    name?: string | undefined,
    itemOptions: Array<IFoodItemOptions>
}
// 
export interface IFoodVariation {
    name: "Variation"
    items: Array<IFoodItem>
}

export interface IFoodAddOns {
    name: "Add-ons"
    items: Array<IFoodItem>
}
// 


export interface IFood {
    img: StaticImageData,
    foodName: string
    foodCode: string
    types: Array<IFoodVariation | IFoodAddOns>
}

export interface IFoods {
    foods: Array<IFood>,
    cart: Array<IFoodItemOptions>,
    foodOptions: {
        isOpened: booelan,
        openedFoodCode?: string,
    },
}