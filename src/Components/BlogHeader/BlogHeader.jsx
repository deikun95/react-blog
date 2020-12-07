import { Header, HeaderBtn, HeaderFind, HeaderLogo, SecondLogoWord, FindIcon } from './BlogHeader.styles';
const BlogHeader = () => {
    return (
        <Header>
            <HeaderLogo>
                My <SecondLogoWord>blog</SecondLogoWord>
            </HeaderLogo>
            <HeaderFind>
                <FindIcon>
                    <svg enablBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="m8.5 20h-6c-1.378 0-2.5-1.122-2.5-2.5v-15c0-1.378 1.122-2.5 2.5-2.5h15c1.378 0 2.5 1.122 2.5 2.5v6c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6c0-.827-.673-1.5-1.5-1.5h-15c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                        </g>
                        <g>
                            <path d="m15 21c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-11c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                        </g>
                        <g>
                            <path d="m23.5 24c-.128 0-.256-.049-.354-.146l-4.616-4.616c-.195-.195-.195-.512 0-.707s.512-.195.707 0l4.616 4.616c.195.195.195.512 0 .707-.097.097-.225.146-.353.146z" />
                        </g>
                    </svg>
                </FindIcon>
                    <input type="text" />
            </HeaderFind>
            <HeaderBtn>
                <svg
                    enableBackground="new 0 0 551.13 551.13"
                    viewBox="0 0 551.13 551.13"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m275.565 0c-151.944 0-275.565 123.621-275.565 275.565s123.621 275.565 275.565 275.565 275.565-123.621 275.565-275.565-123.621-275.565-275.565-275.565zm0 516.685c-132.955 0-241.119-108.164-241.119-241.119s108.164-241.12 241.119-241.12 241.12 108.164 241.12 241.119-108.165 241.12-241.12 241.12z" />
                    <path d="m292.788 137.783h-34.446v120.56h-120.56v34.446h120.56v120.56h34.446v-120.56h120.56v-34.446h-120.56z" />
                </svg>
            </HeaderBtn>
        </Header>
    );
};

export default BlogHeader;
