import styled from 'styled-components'

export const ChartContainer = styled.div`
  margin: 2.5rem 0;
  width: 50%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  padding: 1.25rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 18px;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`

export const ChartsSection = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
