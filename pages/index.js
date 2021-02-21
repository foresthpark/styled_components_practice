import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <Container>
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`;
