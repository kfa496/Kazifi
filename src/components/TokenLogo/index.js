import React from 'react';
import styled from 'styled-components';

import { toAbsoluteUrl } from "../../lib/helper";

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: block;
    
`

const Wrapper = styled.div`
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  border-radius: 16px;
  padding: 5px;
`

const TokenLogo = props => {
    return (
        <Wrapper size={props.size}>
            <LogoImage
                src={props.src}
                alt={props.name}
                />
        </Wrapper>
    )
}

export default TokenLogo;