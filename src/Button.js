import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({ children, to, size = "medium", padding, margin }) => {
  const navigate = useNavigate();

  // Handle button click (navigate if "to" prop is provided)
  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <StyledWrapper size={size} padding={padding} margin={margin}>
      <button className="button" onClick={handleClick}>
        {children}
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

// Styled components with dynamic size, padding, and margin
const StyledWrapper = styled.div`
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding: ${(props) => props.padding || getPadding(props.size)};
    margin: ${(props) => props.margin || "0"};
    background-color: rgb(0 107 179);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    color: #fff;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: ${(props) => getFontSize(props.size)};
    cursor: pointer;
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }

  .button:hover .icon {
    transform: translate(4px);
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }
`;

// Helper functions to determine size styles
const getFontSize = (size) => {
  switch (size) {
    case "small":
      return "12px";
    case "large":
      return "18px";
    default:
      return "15px"; // Medium
  }
};

const getPadding = (size) => {
  switch (size) {
    case "small":
      return "0.25rem 0.75rem";
    case "large":
      return "0.75rem 1.75rem";
    default:
      return "0.5rem 1.25rem"; // Medium
  }
};

export default Button;
