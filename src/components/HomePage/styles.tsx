import styled from 'styled-components'

export const HomePageContainer = styled.div`
  padding: 1.25rem;
  text-align: center;
  background: #2000ad;
  backdrop-filter: blur(50px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 6rem;

    h1 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      padding: 1.25rem;
      font-size: 2.5rem;
      margin-bottom: 1.25rem;
    }

    img {
      position: absolute;
      right: 0;
      max-height: 5rem;
      max-width: 5rem;
    }
  }

  .charts-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    width: 100%;
  }

  .hospital-buttons {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`
