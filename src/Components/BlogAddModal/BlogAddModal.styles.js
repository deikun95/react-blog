import styled from 'styled-components';

export const ModalBackground = styled.div`
    background-color: #0000005c;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    width: 700px;
    height: 560px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 50px 30px;
`;

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const ModalText = styled.div`
    width: 100%;
    margin-bottom: 30px;
`;

export const Label = styled.div`
    margin-right: 10px;
    font-size: 18px;
    font-weight: 600;
`;

export const ModalUpload = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
`;

export const UploadIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
`;

export const HeaderInput = styled.input`
    /* width: 80%; */
    flex: 1;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #eee2ee;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
`;

export const TextArea = styled.textarea`
    width: 678px;
    max-width: 678px;
    height: 250px;
    border-radius: 10px;
    border: 1px solid #eee2ee;
    outline: none;
    padding: 10px;
    margin-top: 20px;
    font-size: 16px;
    font-family: inherit;
`;

export const ModalHeaderActions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
    position: relative;
`;

export const ModalFooterActions = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    user-select: none;
`;

export const ModalFooterBtn = styled.div`
    width: 170px;
    height: 35px;
    background-color: ${props => (props.isDisabled ? '#eeeeee' : '#a900ff')};
    text-align: center;
    padding-top: 10px;
    border-radius: 70px;
    color: white;
    cursor: ${props => (props.isDisabled ? 'auto' : 'pointer')};
    transition: all ease 0.3s;
    &.active {
        &:hover {
            box-shadow: 23px 32px 53px #7cf1bd, -16px -8px 42px #ff71e0;
        }
    }
`;

export const HeaderCloseBtn = styled.div`
    position: absolute;
    top: -15px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: all ease 0.2s;
    & path {
        fill: #000;
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
