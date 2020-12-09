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
        this.toggleScroll()
    };

    toggleScroll = () => {
        const body = document.querySelector('body')
        body.classList.toggle('hidden-scroll')
    }
}

export default Modal;
