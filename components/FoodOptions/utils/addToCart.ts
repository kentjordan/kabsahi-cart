import { IFood } from "@redux/slices/foods/types";

export const addToCart: (foods: Array<IFood>, foodIndex: number) => Array<any> = (foods, foodIndex) => {
    const FOOD_SELECTEED = [];
    const food = foods[foodIndex];

    for (let b = 0; b < food.types.length; b++) {
        for (let c = 0; c < food.types[b].items.length; c++) {
            for (let d = 0; d < food.types[b].items[c].itemOptions.length; d++) {
                if (food.types[b].items[c].itemOptions[d].cartQty > 0)
                    FOOD_SELECTEED.push({
                        ...food.types[b].items[c].itemOptions[d],
                        type: food.types[b].items[c].name,
                    });
            }
        }
    }

    return FOOD_SELECTEED;
}

export default addToCart;