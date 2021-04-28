import { Injectable } from '@nestjs/common';
const fs = require('fs')
const fetch = require('node-fetch');

@Injectable()
export class HisMinsaService {

    async validar_dni(dni:string){

        console.log(dni)

  return  await    fetch("https://websalud.minsa.gob.pe/hisminsa/his/personal", {
        "headers": {
          "accept": "*/*",
          "accept-language": "es-ES,es;q=0.9,en;q=0.8",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "pragma": "no-cache",
          "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://websalud.minsa.gob.pe/hisminsa/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "C=PERSONAL&S=INFOGETBYIDRENIEC&idtipodocper=1&numdocper="+dni,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      }).then(respuesta=>{
console.log(respuesta)
 return   respuesta
});

    }


}
