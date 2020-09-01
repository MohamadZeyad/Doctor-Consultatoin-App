import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../search.svg";

const SearchIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #f2f1f1;
  height: 45px;
  width: 90vw;
  border-radius: 5px;
  font-size: 25px;
`;

const SearchField = () => {
  return (
    <div>
      <InputField>
        <SearchIconContainer>
          <SearchIcon></SearchIcon>
          <input placeholder="Search" style={{ fontSize: "16px" }}></input>
        </SearchIconContainer>
      </InputField>
    </div>
  );
};

export default SearchField;
