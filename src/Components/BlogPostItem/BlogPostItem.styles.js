import styled from 'styled-components';

export const ItemWrapper = styled.div`
    color: white;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 40px;
    box-shadow: 24px 24px 45px #58be86, -24px -24px 45px #7effc0;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const ItemHeader = styled.div`
`;

export const ItemText = styled.div`
    font-size: 18px;
    font-weight: 500;
`;

export const ItemPhoto = styled.div`
    margin-top: 20px;
    background-image: url('https://assets.justinmind.com/wp-content/uploads/2020/04/what-is-neumorphism.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    width: 100%;
    height: 500px;
`;
export const ItemBtns = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: center;
`;

export const CloseBtn = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: all ease 0.2s;
    & path {
        fill: #fff;
        transition: all ease 0.2s;
    }
    &:hover {
        & path {
            fill: #ef5350;
        }
        width: 30px;
        height: 30px;
    }
`;
