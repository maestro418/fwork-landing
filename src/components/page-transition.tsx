import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';


interface PageTransitionProps {
    children: React.ReactNode,
}

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <StyledPageTransition>
            <CSSTransition
                in={true}
                timeout={300}
                classNames="page-transition"
                unmountOnExit
            >
                <div>
                    {children}
                </div>
            </CSSTransition>
        </StyledPageTransition>
    );
};

const StyledPageTransition = styled.div`
    
    .page-transition-enter {
        opacity: 0;
        transform: translateY(20px);
    }
    .page-transition-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 300ms, transform 300ms;
    }

    
    .page-transition-exit {
        opacity: 1;
        transform: translateY(0);
    }
    .page-transition-exit-active {
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 300ms, transform 300ms;
    }

`

export default PageTransition;
