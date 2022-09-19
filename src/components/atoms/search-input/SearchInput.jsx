import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  border: 1px solid #e4e8ec;
  padding: 14px 16px 14px 20px;
  transition: border 0.25s ease-out;
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  font-size: 14px;
  color: gray;
  &:focus {
    border: 1px solid gray;
  }
`;

const SearchInput = (props) => {
  return <Input type="search" {...props} />;
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  props: PropTypes.any,
  id: PropTypes.string,
};

SearchInput.defaultProps = {
  id: "location-search-input",
  "data-testid": "location-search-input",
};

export default SearchInput;
