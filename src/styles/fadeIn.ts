import styled from "styled-components";

export const FadeInDiv = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "none" : "translateY(40px)")};
  transition: all 1s cubic-bezier(0.4,0,0.2,1);
`;

export const FadeInImg = styled.img<{ $visible: boolean; $delay?: string }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(40px)')};
  transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
  transition-delay: ${({ $delay }) => $delay || '0s'};
`;