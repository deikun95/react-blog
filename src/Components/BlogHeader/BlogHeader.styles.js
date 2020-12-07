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
    transition: all ease 0.3s;
    &:hover {
        fill: #6be8a3;
    }
    cursor: pointer;
`;

export const HeaderFind = styled.div`
    margin-left: -70px;
    width: 250px;
    height: 45px;
    display: flex;
    background: #fff;
    align-items: center;
    border-radius: 10px;
    justify-content: space-around;
    transition: all ease 0.3s;
`;
export const FindIcon = styled.div`
    height: 30px;
    width: 30px;
    fill: #505050;
    margin-left: 10px;
`;
export const FindInput = styled.input`
    outline: none;
    border: none;
    font-size: 18px;
    padding: 0px 5px;
    color: #505050;
    width: 70%;
    &:focus {
        ${FindIcon} {
            fill: red;
        }
    }
`;

console.log(FindIcon);
