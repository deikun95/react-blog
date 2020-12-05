const PostItem = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <div>{post.text}</div>
        </div>
    );
};

export default PostItem