import styled from 'styled-components'

export const Card = styled.div`
  width: 200px;
  height: 280px;
  background-color: ${props => props.color ? props.color : '#FFF'};
  border-radius: 10px;
  box-shadow: 0 0 20px #000;
  transition: all 0.5s;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 0 30px #000;
  }
`

export const ContentImage = styled.div`
  width: 80px;
  height: 80px;
  box-shadow: 0 0 3px #000;
  transition: all 0.5s;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color ? props.color : '#000'};
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
`

export const Content = styled.div`
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`

export const Label = styled.label`
  cursor: text;
  font-weight: bold;
  color: ${props => props.color ? props.color : '#FFF'};
`

export const Subtitle = styled.span`
  cursor: text;
  font-weight: bold;
  color: ${props => props.color ? props.color : '#FFF'};
  margin-top: 10px;
`
