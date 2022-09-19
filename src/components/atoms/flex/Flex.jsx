import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
`;
const Flex = props => {
  return <FlexContainer {...props}>{props.children}</FlexContainer>;
};

Flex.propTypes = {
  children: PropTypes.any,
};

export default Flex;
