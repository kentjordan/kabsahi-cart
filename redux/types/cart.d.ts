import { StaticImageData } from "next/image";

export default interface ICartInitialState {
    isOpened: boolean,
    items: Array<{
        id?: number,
        name?: string,
        img?: StaticImageData,
        price?: number,
        quantity?: number,
    }>
}