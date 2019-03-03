import styled from 'styled-components'

export const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.$green};
  border: 1px solid transparent;
  border-radius: 1rem;
  color: hsl(152, 50%, 15%);
  transition: all 0.2s;
  :hover,
  :active {
    color: hsl(152, 50%, 15%);
    background-color: ${({ theme }) => theme.colors.$textBright};
    border: 1px solid ${({ theme }) => theme.colors.$green};
    ion-icon {
      color: hsl(152, 50%, 15%);
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    padding: 4px 8px;
  }
`
