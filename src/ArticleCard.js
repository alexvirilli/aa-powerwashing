import React from 'react';
import styled from 'styled-components';

const ArticleCard = ({
  linkUrl = "https://bbc.com",      // default URL if none provided
  title = "Default Title",
  author = "Author Name",
  description = "Default Description"
}) => {
  
  const handleCopy = () => {
    navigator.clipboard.writeText(linkUrl)
      .then(() => {
        console.log("Link copied to clipboard:", linkUrl);
        // You could display a toast or alert here to inform the user
      })
      .catch((error) => {
        console.error("Failed to copy link:", error);
      });
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="icons"> 
          <button className="copy" onClick={handleCopy}>
            <svg className="copy__icon" viewBox="0 0 20 20">
              <path d="M8.416,3.943l1.12-1.12v9.031c0,0.257,0.208,0.464,0.464,0.464c0.256,0,0.464-0.207,0.464-0.464V2.823l1.12,1.12
                       c0.182,0.182,0.476,0.182,0.656,0c0.182-0.181,0.182-0.475,0-0.656l-1.744-1.745c-0.018-0.081-0.048-0.16-0.112-0.224
                       C10.279,1.214,10.137,1.177,10,1.194c-0.137-0.017-0.279,0.02-0.384,0.125C9.551,1.384,9.518,1.465,9.499,1.548L7.76,3.288
                       c-0.182,0.181-0.182,0.475,0,0.656C7.941,4.125,8.234,4.125,8.416,3.943z M15.569,6.286h-2.32v0.928h2.32
                       c0.512,0,0.928,0.416,0.928,0.928v8.817c0,0.513-0.416,0.929-0.928,0.929H4.432c-0.513,0-0.928-0.416-0.928-0.929V8.142
                       c0-0.513,0.416-0.928,0.928-0.928h2.32V6.286h-2.32c-1.025,0-1.856,0.831-1.856,1.856v8.817c0,1.025,0.832,1.856,1.856,1.856
                       h11.138c1.024,0,1.855-0.831,1.855-1.856V8.142C17.425,7.117,16.594,6.286,15.569,6.286z" />
            </svg>
            Copy
          </button>
          <button className="see-more">
            <svg viewBox="0 0 20 20" className="see-more__icon">
              <path d="M3.936,7.979c-1.116,0-2.021,0.905-2.021,2.021s0.905,2.021,2.021,2.021S5.957,11.116,5.957,10
                       S5.052,7.979,3.936,7.979z M3.936,11.011c-0.558,0-1.011-0.452-1.011-1.011s0.453-1.011,1.011-1.011S4.946,9.441,4.946,10
                       S4.494,11.011,3.936,11.011z M16.064,7.979c-1.116,0-2.021,0.905-2.021,2.021s0.905,2.021,2.021,2.021s2.021-0.905,2.021-2.021
                       S17.181,7.979,16.064,7.979z M16.064,11.011c-0.559,0-1.011-0.452-1.011-1.011s0.452-1.011,1.011-1.011S17.075,9.441,17.075,10
                       S16.623,11.011,16.064,11.011z M10,7.979c-1.116,0-2.021,0.905-2.021,2.021S8.884,12.021,10,12.021s2.021-0.905,2.021-2.021
                       S11.116,7.979,10,7.979z M10,11.011c-0.558,0-1.011-0.452-1.011-1.011S9.442,8.989,10,8.989S11.011,9.441,11.011,10
                       S10.558,11.011,10,11.011z" />
            </svg>
          </button>
        </div>
        <div className="image" />
        <div className="card__info">
          {/* "author" is displayed here */}
          <span className="page">{author}</span>

          {/* Use the "title" prop for the link text and "linkUrl" for href */}
          <a href={linkUrl} className="title">
            {title}
          </a>

          {/* "description" prop goes here */}
          <p className="content">
            {description}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 325px;
    background: #e8e8e8;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    color: #212121;
    border: 2px solid #ab4b38;
    transition: all 0.5s ease;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 5px;
    position: absolute;
    right: 15px;
    top: 15px;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  .image {
    width: 300px;
    height: 148px;
    background: linear-gradient(163deg, rgba(56,235,226,1) 0%, rgba(134,221,245,1) 50%);
  }

  .copy, .see-more {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }

  .copy {
    background: #eb4b38;
  }

  .see-more {
    background: #ab4b38;
  }

  .copy__icon, .see-more__icon {
    width: 15px;
    fill: white;
  }

  .card__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 15px;
    gap: 3px;
  }

  .page {
    font-size: 13px;
    font-weight: 100;
  }

  .title {
    text-decoration: none;
    font-weight: 600;
    font-size: 17px;
    color: black;
  }

  .content {
    font-size: 14px;
  }

  .card:hover {
    box-shadow: 5px 5px 10px 0px #ab4b3866;
  }

  .card:hover .icons {
    z-index: 1;
    opacity: 1;
  }

  .card:hover .image {
    filter: brightness(0.8);
  }

  .card:hover .title {
    color: #ab4b38;
  }
`;

export default ArticleCard;
