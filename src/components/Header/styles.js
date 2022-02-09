import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  h1{
    font-size: 48px;
    color: #fff;
    max-width: 781px;
    text-align: center;
    margin-bottom: 40px;

  }

  p{
    font-size: 14px;
    color: #fff;
  }

  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1033px;
    
    li{
      list-style: none;
      margin: 24px 5px 0 5px;
    
      button{
        border: none;
        color: #000;
        background: #fff;
        font-size:16px;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }


`