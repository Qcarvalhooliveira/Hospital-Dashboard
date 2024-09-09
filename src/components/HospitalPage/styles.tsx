import styled from 'styled-components'

export const HospitalContainer = styled.div`
  padding: 1.25rem;
  text-align: center;
  background: #2000ad;
  backdrop-filter: blur(50px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }

  .link {
    display: flex;
    justify-content: flex-end;

    cursor: pointer;

    color: #fff;
    font-size: 2rem;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export const KPIContainer = styled.div`
  display: flex;
  margin-bottom: 1.9rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;

  .kpi {
    background: linear-gradient(90deg, #007bff, #6207ac);
    border: none;
    border-radius: 8px;
    padding: 1.25rem;
    width: 12.5rem;
    text-align: center;
    box-shadow: 0 4px 30px rgba(7, 7, 7, 0.233);

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.7rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
      color: #fff;
    }
  }
`
export const ChartSection = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
