import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`;

export const HeaderContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const UserHeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.div`
  align-items: center;
`;
