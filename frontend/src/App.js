import React, { useMemo, useState } from "react";
import styled from "styled-components";
import wave from "./img/wave.jpeg";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Expenses from "./Components/Expenses/Expenses";
import Income from "./Components/Incomes/Income";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useGlobalContext } from "./contexts/globalContexts";
import History from "./Components/History/History";

function App() {
  const [active, setActive] = useState(1);
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const global = useGlobalContext();
  // console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <History displayRecent={false} />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled wave={wave} className="App">
      <MainLayout>
        {orbMemo}
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.wave});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  background-size: cover;
  background-repeat: no-repeat;
`;

export default App;
