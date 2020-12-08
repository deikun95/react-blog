const { observable } = require("mobx");

class Modal {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable isModalOpen = false;

    @action openModal = () => {
        this.isModalOpen = !this.isModalOpen
    }

}

