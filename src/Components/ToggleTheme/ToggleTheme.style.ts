import styled from 'styled-components';

export const ToggleWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    padding: 0 20px;

    input[type='checkbox'] {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    label {
        cursor: pointer;
        text-indent: -9999px;
        width: 200px;
        height: 100px;
        background: grey;
        display: block;
        border-radius: 100px;
        position: relative;
    }

    label:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 90px;
        height: 90px;
        background: #fff;
        border-radius: 90px;
        transition: 0.3s;
    }

    input:checked + label {
        background: #cccccc;
    }

    input:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

    label:active:after {
        width: 130px;
    }
`;
