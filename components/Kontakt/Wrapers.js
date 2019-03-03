import styled from 'styled-components'

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 90vw;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 32px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 24px 16px;
  }
`

export const HeaderWraper = styled.div`
  width: 86vw;
  margin: 0 auto;
`
export const ContButtWraper = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid hsla(210, 40%, 90%, 0.5);
  background-color: hsla(210, 30%, 90%, 0.3);
  box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1);
`
export const InfoWraper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  min-width: 300px;
`
export const ContactWraper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2rem 0 2rem;
  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`
export const HoursWraper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  min-width: 220px;

  @media (min-width: 481px) and (max-width: 767px) {
    align-items: flex-start;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    align-items: flex-start;
  }
`
export const KontaktContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ion-icon {
    margin-right: 0.2rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100vw;
  }
`

export const P = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  padding-left: 28px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
    padding-left: 20px;
  }
`

export const ButtonWraper = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 32px;
  p {
    color: ${({ theme }) => theme.colors.$G4};
    font-weight: 600;
    padding-bottom: 8px;
  }
  :before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: hsla(210, 65%, 90%, 0.6);
    margin-bottom: 8px;
  }
`

export const BankAccWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
  p {
    font-size: 15px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.$G5};
  }
  ion-icon {
    font-size: 16px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-right: 0;
  }
`
export const SocialIcons = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.$B6};
`
export const AccInfo = styled.div``
