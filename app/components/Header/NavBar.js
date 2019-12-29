import React from 'react';

import styled from 'styled-components';

const NavBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 10;
  gridcolumn: 1 / end;
  height: 70px;
  background-color: blue;
`;

const Name = styled.h1`
  color: black;
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Name>Hello</Name>
    </NavBarWrapper>
  );
}

export default NavBar;
