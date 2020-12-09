import { makeAutoObservable } from 'mobx'

class Modal {
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    isModalOpen = false;

    toggleModal = () => {
        this.isModalOpen = !this.isModalOpen;
        this.rootStore.postsModule.clearTempPost()
    };
}

export default Modal;
