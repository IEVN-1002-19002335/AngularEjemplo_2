import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    imageWidth:number=50;
    imageMargin:number=2;
    muestraImg:boolean=true;
    listFilter:string='';

    productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2020",
      "precio":120000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "imagenURL":"https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg"

    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"marzo 2022",
      "precio":180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "imagenURL":"https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"Enero 2 20223",
      "precio":200000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenURL":"https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg"
    },

  ]
}
