import { StaticImageData } from "next/image";

export interface ICartItem {
    id: number,
    name?: string;
    img?: StaticImageData;
    price?: number;
    quantity?: number;
}