import { makeAutoObservable } from 'mobx';
import React from 'react';
import ModalStore from './Modal/Modal';

class Store {
    constructor() {
        makeAutoObservable(this);
        this.modalModule = new ModalStore(this);
    }
}

export const storeContext = React.createContext(new Store());
export const useStore = () => React.useContext(storeContext);
