import { lazy, Suspense } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import LibraryPage from "./pages/LibraryPage/LibraryPage";
// import StatisticPage from "./pages/StatisticsPage/StatisticPage";
// import TrainingPage from "./pages/TrainingPage/TrainingPage";

const LibraryPage = lazy(() => import("./pages/LibraryPage/LibraryPage"));
const StatisticPage = lazy(() => import("./pages/StatisticsPage/StatisticPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage/TrainingPage"));

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<LibraryPage />} />
          <Route path="statistics" element={<StatisticPage />} />
          <Route path="training" element={<TrainingPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Suspense>
  );
}

export default App;
