//bize parametre olarak gelen bir araba icin 
//aracin fotograf url'sini olusturucaz

import { CarType } from "../types";

//? temel url: https://cdn.imagin.studio/getimage
//aracin bilgilerine gore dinamik olarak elde edecegimiz sonuc:
// ? https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=bmw&modelFamily=m3

export const generateImage = (car: CarType, angle?: string):string => {
  //js'nin url classindan ornek almamiz sayesinde
  //url uzerinde degisiklikleri kolayca yapmamizi saglayacak methodlara erisimimiz acildi
const url:URL= new URL ('https://cdn.imagin.studio/getimage')

//url'e dinamik bir sekilde arama parametresi ekleme
url.searchParams.append('customer','hrjavascript-mastery')
url.searchParams.append('make', car.make)
url.searchParams.append('modelFamily', car.model)
url.searchParams.append('zoomType','fulscreen')
if(angle){
    url.searchParams.append('angle',angle)
}
//olusturdugumuz url'i fonksiyonun cagrildigi yere dondur

return url.href
}

