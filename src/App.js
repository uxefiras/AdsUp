import Nav from "./components/Nav";
import MainSection from "./components/MainSection";
import GlobalStyled from "./components/GeneralLayout";
import { DataforAds } from "./Data";
function App() {
  return (
    <>
      <GlobalStyled />
      <Nav />
      <MainSection data={DataforAds} />
    </>
  );
}

export default App;
