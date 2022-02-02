import styled from 'styled-components'

export const Logo = styled.div`
  height: 56px;
  color: #ffffff;
  background: #5C16C5;
  font-size: 24px;
  
    img{
      width: 184px;
      height: 24px;
      color: linear-gradient(0deg, #FFFFFF, #FFFFFF);
      margin: 15px 0 15px 112px;
    } 
`

export const Head = styled.div`
  background: #2D0C5E;
  height: 449px;
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
    
      a{
        text-decoration: none;
        color: #000;
        background: #fff;
        font-size:16px;
        padding: 8px 16px;
        border-radius: 4px;
      }
    }
  }


`