import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid gray;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: #fff;
`;

const Card = props => {
  return <CardContainer>{props.children}</CardContainer>;
};

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
