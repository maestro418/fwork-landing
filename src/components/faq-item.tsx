import React from "react";
import styled from "styled-components";

import Icon from '../assets/img/icon.jpg'

interface FaqItemProps {

}

const FaqItem = () => {
    return (
        <StyledFaqItem>
            <div>
                <img src={Icon} width={50} />
            </div>
            <div>

            </div>
        </StyledFaqItem>
    )
}

const StyledFaqItem = styled.div`
    width: 100%;
    display: flex;
    gap: 2em;

`

export default FaqItem