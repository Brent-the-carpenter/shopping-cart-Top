import Stlyed from "styled-components";

const Container = Stlyed.div`
background-color: var(--background-color);
position: sticky;
bottom: 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
 img{
    width: 40px;
    height: 40px;
    transition: transform 0.3s;
 }
    img:hover{
        transform: scale(1.1);
        background-color: var(--hover-focus-bg-color);
        border-radius: 100%;
    }
    p{
        font-size: 1.5rem;
        color:var(--footer-text-color);
`;
export default Container;
