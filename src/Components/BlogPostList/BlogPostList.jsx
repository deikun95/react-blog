import { useStore } from '../../store/index.js';
import PostItem from '../BlogPostItem/BlogPostItem.jsx';
import { observer } from 'mobx-react-lite';

const PostList = () => {
    const { postsModule } = useStore();
    const { postList, deletePost } = postsModule;

    return postList.map(post => <PostItem onRemove={deletePost} key={post.id} post={post} />);
};

export default observer(PostList);
