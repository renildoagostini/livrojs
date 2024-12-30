import { Routes, Route } from "react-router-dom";
import MenuSuperior from "./components/MenuSuperior";
import InclusaoLivros from "./components/InclusaoLivros";
import ManutencaoLivros from "./components/ManutencaoLivros";
import ResumoLivros from "./components/ResumoLivros";

const App = () => {
  return (
    <>
      <MenuSuperior />
      <Routes>
        <Route path="/resumo" element={<ResumoLivros />} />
        <Route path="/" element={<InclusaoLivros />} />
        <Route path="/manutencao" element={<ManutencaoLivros />} />
        
      </Routes>
    </>
  );
};

export default App;



