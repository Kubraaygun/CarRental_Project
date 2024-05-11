import { MouseEventHandler } from "react";

//Tip tanimi
export type ButtonPropsType = {
    disabled?: boolean;
    designs?: string;
    title: string;
    btnType?: "submit" | "reset" | "button";
    rIcon?: string;

    //tiklanma olayinda calisan fonksiyon
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

//api'dan gelen arac verisinin tipi
export interface CarType {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: 'fwd' | 'rwd' | 'awd' | '4wd';
    fuel_type: 'gas' | 'diesel' | 'electricity';
    highway_mpg: number;
    make: string;
    model: string;
    transmission: 'a' | 'm';
    year: number;
}