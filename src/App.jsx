import { AppContainer } from './App.styles';
import BlogHeader from './Components/BlogHeader/BlogHeader';
import PostList from './Components/BlogPostList/BlogPostList';

function App() {
    return (
        <div>
            <BlogHeader />
            <AppContainer>
                <PostList />
            </AppContainer>
        </div>
    );
}

export default App;
