import styled from "styled-components";

export const BodyConclusionPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 20rem;
`;

export const FinishedContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  gap: 32px;
`;

export const CardFinished = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 32px;
  padding: 22px;
  border-left: 1px solid ${(props) => props.theme["yellow"]};
  border-top: 1px solid ${(props) => props.theme["yellow"]};
  border-right: 1px solid ${(props) => props.theme["purple"]};
  border-bottom: 1px solid ${(props) => props.theme["purple"]};
  border-radius: 8px 50px 8px 50px;

  background-color: ${(props) => props.theme["background"]};
`;

export const ContentCardFinished = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ConfigIconsCard = styled.div`
  padding: 4px;
  border-radius: 1000px;
`;

export const UserIcon = styled(ConfigIconsCard)`
  background-color: lightblue;
`;
export const PingIcon = styled(ConfigIconsCard)`
  display: flex;
  align-items: center;
  color: white;
  background-color: ${(props) => props.theme["purple"]};
`;

export const TimerIcon = styled(ConfigIconsCard)`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["yellow"]};
`;

export const CashIcon = styled(ConfigIconsCard)`
  display: flex;
  align-items: center;
  color: white;
  background-color: ${(props) => props.theme["yellow-dark"]};
`;

export const AliginTextCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitlePage = styled.h1`
  color: ${(props) => props.theme["yellow-dark"]};
`;
