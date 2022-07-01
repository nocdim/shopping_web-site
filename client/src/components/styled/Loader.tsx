import styled from "styled-components";

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 350px;
    min-width: 350px;
    @media (max-width: 1000px) {
        min-width: 150px;
    }
`
const Spinner = styled.div`
    width: 100px;
    height: 100px;
    background-color: #ff000067;
    border-radius: 50px;
    animation: loading 1.2s linear infinite;
    
    @keyframes loading {
        0% { width: 0px; height: 0px; background-color: #f000; }
        25% { width: 20px; height: 20px; background-color: #f00; }
        50% { width: 40px; height: 40px; background-color: #f000; }
        75% { width: 60px; height: 60px; background-color: #000000; }
        100% { width: 80px; height: 80px; background-color: #f000; }
    }
`

export {
    LoaderContainer,
    Spinner
}