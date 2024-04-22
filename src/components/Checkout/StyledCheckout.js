import Styled from "styled-components";
const Container = Styled.div`
  background-color: var(--background-color);
  
  
  width: 100%;
  display: flex;
  flex:2;
  
  justify-content: center;
  align-items: start;
  gap: 10px;
   img{
      width: 60px;
      height: 60px;
      
   }
   ul{
    display: flex;
    flex-direction: column;
    gap: 20px;
   }
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        max-width:500px;
        border: 1px solid var(--text-color);
        border-radius: 10px;
        
      }
      p{
          font-size: 1.5rem;
          color:var(--text-color);
        }
        .empty{
            font-size: 2rem;
            color: var(--text-color);
        }
        .total{
            font-size: 2rem;
            color: var(--text-color);
        }
        .quantity{
            font-size: 2rem;
            color: var(--text-color);
            svg{
                width: 30px;
                height: 30px;
                fill: var(--text-color);
            }
        }
    
`;
export default Container;
