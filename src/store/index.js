import React from 'react';
import ModalStore from './Modal';
import PostsStore from './Posts'


class Store {
    constructor() {
        this.modalModule = new ModalStore(this);
        this.postsModule = new PostsStore(this);
    }
}

export const storeContext = React.createContext(new Store());
export const useStore = () => React.useContext(storeContext);
