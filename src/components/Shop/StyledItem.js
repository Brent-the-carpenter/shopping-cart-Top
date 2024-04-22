import Styled from "styled-components";
const Div = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  gap: 10px;
  border: 1px solid var(--text-color);
 
  .image-container{
     width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    
  }
  img{
    width: 200px;
    height: 200px;
    border-radius: 10px;
    
  }
  #show-button{
    display: flex;
    background-color:rgba(255, 255, 255, 0.0) ;
    border: none;
    padding: 0;
    width: min-content;
    height: min-content;
    border-radius: 100%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    svg{
      width: 30px;
      height: auto;
      fill:var(--text-color);
      margin: 0;
      transform: rotate(0deg);
     
      transition: transform 0.5s;
    }
    .rotate{
      transform: rotate(-180deg);
    }
  }
  .description{
    display: flex;
    flex-direction: row;
    font-size: 25px;
  }
  p {
    visibility: hidden;
    opacity: 0;
    height: 0;
    
}
.action-container{
  display: flex;
  flex-direction: column;
  
  gap: 10px;
  margin: 10px;
}


.show {
    animation: show 0.5s forwards;
}


@keyframes show {
    0% {
        visibility: hidden; 
        height: 0;
        opacity: 0;
        
    }
    100% {
        visibility: visible;
        height: 100%;
        opacity: 1;
       
    }
  }
`;
export default Div;
