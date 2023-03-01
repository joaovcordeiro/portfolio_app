import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 8rem;

  > section {
    margin-top: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    gap: 8rem;

    @media (max-width: 1000px) {
      gap: 5rem;
    }

    @media (max-width: 700px) {
      gap: 3rem;
      margin-top: 5rem;
    }
  }
`;

export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.primary};
    font-size: 1.3rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.primary};
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.secondary};
      transform: scale(0.95);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;
