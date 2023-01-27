import * as Food from '@assets/photos/foods'
import { v2 } from '@assets/photos/foods'
import { IFoods } from './types'

const FoodsInitialStates: IFoods = {
    foods: [
        {
            img: v2.KabsaBudgetMeal,
            foodName: 'Kabsa Budget Meal',
            foodCode: 'KBM',
            types: [
                {
                    name: "Variation",
                    items: [
                        {
                            itemOptions: [
                                {
                                    img: v2.KabsaBudgetMeal,
                                    pk: 'BF-KBM',
                                    name: "Beef Kabsa",
                                    price: 129,
                                    cartQty: 0,
                                    type: 'Beef',
                                },
                                {
                                    img: v2.KabsaBudgetMeal,
                                    pk: 'CK-KBM',
                                    name: "Chicken Kabsa",
                                    price: 129,
                                    cartQty: 0,
                                    type: 'Chicken',
                                },
                                {
                                    img: v2.KabsaBudgetMeal,
                                    pk: 'KB-KBM',
                                    name: "Kebab Kabsa",
                                    price: 129,
                                    cartQty: 0,
                                    type: 'Kebab'
                                },
                            ],
                        },

                    ],
                },

            ]
        },
        {
            img: v2.Baryani,
            foodName: 'Biryani Series',
            foodCode: 'BRYN-S',
            types: [
                {
                    name: "Variation",
                    items: [
                        {
                            pk: 'BR-CK',
                            name: "Chicken",
                            itemOptions: [
                                {
                                    img: Food.Baryani,
                                    pk: 'BR-CK-SOLO',
                                    name: "Solo (good for sharing)",
                                    price: 129,
                                    cartQty: 0,
                                },
                                {
                                    img: Food.Baryani,
                                    pk: 'BR-CK-SM',
                                    name: "Small (serves 2-3 pax)",
                                    price: 129,
                                    cartQty: 0,
                                },
                                {
                                    img: Food.Baryani,
                                    pk: 'BR-CK-M',
                                    name: "Medium (serves 5-6 pax)",
                                    price: 129,
                                    cartQty: 0,
                                },
                                {
                                    img: Food.Baryani,
                                    pk: 'BR-CK-L',
                                    name: "Large (serves 6-8 pax)",
                                    price: 129,
                                    cartQty: 0,
                                },
                            ],
                        },
                        {
                            name: "Beef",
                            pk: 'BR-BF',
                            itemOptions: [
                                {
                                    img: Food.Baryani,
                                    pk: 'BR-BF-SOLO',
                                    name: "Solo (good for sharing)",
                                    price: 129,
                                    cartQty: 0,
                                },
                                {
                                    img: Food.Baryani,
                                    pk: 'BR-BF-SM',
                                    name: "Small (serves 2-3 pax)",
                                    price: 129,
                                    cartQty: 0,
                                },
                                {
                                    img: Food.Baryani,
                                    pk: 'BR-BF-M',
                                    name: "Medium (serves 5-6 pax)",
                                    price: 129,
                                    cartQty: 0,
                                },
                                {
                                    img: Food.Baryani,
                                    pk: 'BR-BF-L',
                                    name: "Large (serves 6-8 pax)",
                                    price: 129,
                                    cartQty: 0,
                                },
                            ],
                        },
                    ],
                },

            ]
        },
        {
            img: v2.BroastedChicken,
            foodName: 'Broasted Series',
            foodCode: 'BRTD-S',
            types: [
                {
                    name: "Variation",
                    items: [
                        {
                            pk: undefined,
                            name: undefined,
                            itemOptions: [
                                {
                                    img: Food.BroastedChicken,
                                    pk: 'BR-CK-SOLO',
                                    name: "4 pcs. Chicken with Fries, Pita Bread, and Gralic Dip",
                                    price: 279,
                                    cartQty: 0,
                                },
                                {
                                    img: Food.BroastedChicken,
                                    pk: 'BR-CK-SM',
                                    name: "5 pcs. Chicken Wings with Fries, Pita Bread, and Gralic Dip",
                                    price: 269,
                                    cartQty: 0,
                                },
                            ],
                        },
                    ],
                },
            ]
        }
    ],
    cart: [],
    foodOptions: {
        isOpened: false,
        openedFoodCode: '',
    },
}



const AddOns = {
    name: "Add-ons",
    items: [
        {
            pk: undefined,
            name: undefined,
            subItems: [
                {
                    pk: 'T-C',
                    name: "Tomato Chutney",
                    price: 129,
                    cartQty: 0,
                },
                {
                    pk: 'G-D',
                    name: "Garlic Dip",
                    price: 129,
                    cartQty: 0,
                },
            ],
        },
    ],
}

export default FoodsInitialStates;
