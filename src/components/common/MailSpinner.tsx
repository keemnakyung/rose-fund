import { useMailSend } from "@/stores/mail.store";
import { colors } from "@/styles/colors";
import { flexCenterCenter } from "@/styles/mixins.style";
import { keyframes, styled } from "styled-components";

export default function MailSpinner() {
    const { isLoading } = useMailSend();
    
    return (
        isLoading ? (
            <MailSpinnerContainer>
                <Spinner />
            </MailSpinnerContainer>
        ) : null
    );
}

const MailSpinnerContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    ${flexCenterCenter}
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ddd;
  border-top-color: ${colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;