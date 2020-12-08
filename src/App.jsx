import { AppContainer } from './App.styles';
import BlockAddModal from './Components/BlogAddModal/BlogAddModal';
import BlogHeader from './Components/BlogHeader/BlogHeader';
import PostList from './Components/BlogPostList/BlogPostList';

function App() {
    return (
        <div>
            <BlockAddModal></BlockAddModal>
            <BlogHeader />
            <AppContainer>
                <PostList />
            </AppContainer>
        </div>
    );
}

export default App;
