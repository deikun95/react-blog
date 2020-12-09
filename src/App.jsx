import { observer } from 'mobx-react-lite';
import { AppContainer } from './App.styles';
import BlockAddModal from './Components/BlogAddModal/BlogAddModal';
import BlogHeader from './Components/BlogHeader/BlogHeader';
import PostList from './Components/BlogPostList/BlogPostList';
import { useStore } from './store';

function App() {
    const { modalModule } = useStore();
    const { isModalOpen, toggleModal } = modalModule;
    return (
        <div>
            {isModalOpen && <BlockAddModal />}
            <BlogHeader onHandleModal={toggleModal}/>
            <AppContainer>
                <PostList />
            </AppContainer>
        </div>
    );
}

export default observer(App);
