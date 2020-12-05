import PostItem from '../PostItem/PostItem.jsx';

const PostList = () => {
    const postList = [
        {
            title: 'Post1',
            id: 1,
            text: 'dksahdjas hkjd ashkjdh ksajk',
        },
        {
            title: 'Post2',
            id: 2,
            text:
                'dksahdjas hkjd ashkjdh ksajkdksahdjas hkjd ashkjdh ksajkdksahdjas hkjd ashkjdh ksajkdksahdjas hkjd ashkjdh ksajkdksahdjas hkjd ashkjdh ksajkdksahdjas hkjd ashkjdh ksajkdksahdjas hkjd ashkjdh ksajk',
        },
        {
            title: 'Post3',
            id: 3,
            text: 'dasd sakd jsakldjlsjah l jhluh43liy5i43ytkh3rkjhkjhfkjhk',
        },
    ];

    const postItems = postList.map(post => {
        return <PostItem key={post.id} post={post} />;
    });

    return <div>{postItems}</div>;
};

export default PostList;
