import styled from 'styled-components';
import { BtnCircleStyle } from '../atomos/BtnCircle'
import { FaArrowUp } from "react-icons/fa";

export const BtnTop = () => {
  return (
    <BtnCircleTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <BtnCircleStyle $color="#ffd500" $hoverColor="#c99c0a">
            <FaArrowUp size={20} color='#242424'/>
        </BtnCircleStyle>
    </BtnCircleTop>
  )
}

const BtnCircleTop = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
`