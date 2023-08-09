import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 2rem;
  height: 95vh;
  display: flex;
  gap: 2rem;
`;

export const InnerLayout = styled.div`
  padding: 2rem 1.5rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
