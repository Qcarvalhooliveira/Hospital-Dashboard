import styled from 'styled-components'

export const ChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    width: 100%;
    align-items: center;
    gap: 1rem;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Hospitalizations = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(226, 13, 226, 0.5);
  padding: 20px;

  h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
  }
`

export const Specialties = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(226, 13, 226, 0.5);
  padding: 20px;

  h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Satisfaction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(226, 13, 226, 0.5);
  padding: 20px;

  h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
  }
`

export const KPIs = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(226, 13, 226, 0.5);

  h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-size: 16px;
      border-radius: 10px;
      padding: 0.5rem;
      color: #fff;
      background: linear-gradient(90deg, #007bff, #6207ac);
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.5);
    }
  }
`
