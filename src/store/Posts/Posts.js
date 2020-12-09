import nanoid from 'nanoid';
import { makeAutoObservable } from 'mobx';

class Posts {
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    postList = [];
    tempPost = {};

    get isBtnDisabled() {
        return !(this.tempPost.title && this.tempPost.text);
    }

    setTempTitle = event => {
        this.tempPost.title = event.target.value;
    };

    setTempText = event => {
        this.tempPost.text = event.target.value;
    };

    // TODO: дописать метод на получение ссылки
    setTempPhotoUrl = () => {};

    pushPost = () => {
        this.postList.push({
            ...this.tempPost,
            id: nanoid(),
        });
    };

    clearTempPost = () => {
        this.tempPost = {};
    };

    handleAddPost = () => {
        this.pushPost();
        this.rootStore.modalModule.toggleModal();
    };

    deletePost = (id) => {
        this.postList = this.postList.filter(post => post.id !== id)
        console.log(this.postList)
    }
}

export default Posts;
