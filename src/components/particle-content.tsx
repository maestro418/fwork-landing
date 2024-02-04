import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import styled from "styled-components";

import IntroBanner from "./intro-banner";

const ParticlesContainer = ({ title, desc, bgImg }: { title: string, desc: string, bgImg: string }) => {
    const options = React.useMemo(() => {
        return {
            autoPlay: true,
            fullScreen: {
                enable: false,
                zIndex: 100,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                    repulse: {
                        distance: 100,
                    },
                },
            },
            particles: {
                color: "#8898f588",
                effect: {
                    close: true,
                    fill: true
                },
                number: {
                    value: 70
                },
                links: {
                    color: "#475ee2",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 2,
                },
                move: {
                    enable: true,
                    speed: { min: 1, max: 3 },
                },
                opacity: {
                    value: { min: 1, max: 2 },
                },
                size: {
                    value: { min: 1, max: 5 },
                },
                poisson: {
                    enable: true
                }
            },
        };
    }, []);

    const particlesInit = React.useCallback((engine: any) => {
        loadSlim(engine);
    }, []);

    return (
        <StyledParticle>
            <Particles className="particle" init={particlesInit as any} options={options as any} />
            <IntroBanner title={title} desc={desc} bgImg={bgImg} />
        </StyledParticle>
    );
};

const StyledParticle = styled.div`
    position: relative;

    .particle {
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
    }
`
export default ParticlesContainer;