import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root',
})
export class Securtext {

  encrypt(plainText: string): string {
    const chipherText = CryptoJS.AES.encrypt(plainText, environment.secretKey).toString()
    return chipherText;
  }

  decrypt(chipherText: string): string {
    const bytes  = CryptoJS.AES.decrypt(chipherText, environment.secretKey);
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText;
  }

}
