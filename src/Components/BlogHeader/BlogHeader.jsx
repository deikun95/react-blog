import { Header, HeaderLogo, SecondLogoWord } from './BlogHeader.styles';
const BlogHeader = () => {
    return (
        <Header>
            <HeaderLogo>
                My <SecondLogoWord>blog</SecondLogoWord>
            </HeaderLogo>
            <div></div>
        </Header>
    );
};

export default BlogHeader;
