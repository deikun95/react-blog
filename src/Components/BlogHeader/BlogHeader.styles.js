import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    position: fixed;
    height: 60px;
    background: #a900ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLogo = styled.div`
    font-size: 30px;
    width: 145px;
    color: white;
    margin-top: 31px;
`;

export const SecondLogoWord = styled.div`
    font-size: 50px;
`;

export const HeaderBtn = styled.div`
    width: 40px;
    margin-right: 40px;
    height: 40px;
    fill: white;
    transition: all ease 0.2s;
    &:hover {
        fill: #6be8a3;
    }
    cursor: pointer;
`;

export const FindIcon = styled.div`
    height: 30px;
    width: 30px;
    fill: white;
`;

export const HeaderFind = styled.div`
    width: 150px;
    height: 40px;
`
