import { Injectable } from '@angular/core';

const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(name: string, password: string) {
    var result = electron.ipcRenderer.sendSync('send-to-electron', { name: name, password: password })
    console.log(result);
    return result;
  }

  getUserDetails(id) {
    var result = electron.ipcRenderer.sendSync('get-from-electron', id);
    console.log(result);
    return result;
  }
}
