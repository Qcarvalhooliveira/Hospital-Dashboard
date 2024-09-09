import styled from 'styled-components'

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-22rem')};
  width: 22rem;
  height: 100%;
  background-color: #f4f6fc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 1000;
  padding: 1.25rem;
`

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  h3 {
    margin-bottom: 2rem;
    color: #001f3f;
  }

  .filter-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #001f3f;
    }

    select,
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #007bff;
      border-radius: 8px;
      background-color: #f9f9f9;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

      &:focus {
        outline: none;
        border-color: #6207ac;
      }

      &::-webkit-calendar-picker-indicator {
        color: #007bff;
      }
    }

    input[type='month']::before {
      display: block;
      margin-bottom: 5px;
      font-size: 0.85rem;
      color: #555;
    }
  }

  button {
    background: linear-gradient(90deg, #007bff, #6207ac);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background: linear-gradient(90deg, #0056b3, #520680);
    }
  }
`

export const HamburgerMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 15px;
  left: 20px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1100;
  color: ${({ $isOpen }) => ($isOpen ? '#007bff' : '#fff')};
  transition: color 0.3s ease;
`

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`
