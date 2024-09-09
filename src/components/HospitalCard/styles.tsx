import styled from 'styled-components'

export const HospitalCardContainer = styled.div`
  background: linear-gradient(90deg, #007bff, #6207ac);
  border: none;
  border-radius: 8px;

  width: 13rem;
  text-align: center;
  box-shadow: 0 4px 30px rgba(7, 7, 7, 0.233);

  button {
    all: unset;
  }

  &:hover {
    background: linear-gradient(90deg, #0056b3, #520680);
  }

  padding: 0.7rem;
  margin: 0.7rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  h2 {
    font-size: 1.2rem;
    margin: 0;
  }
`
