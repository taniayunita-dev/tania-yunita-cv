import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '@/components/layout/PageLayout';
import { ProjectCaseStudyPage } from './pages/ProjectCaseStudy/ProjectCaseStudyPage';
import { HomePage } from './pages/Home/HomePage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/projects/:projectId"
          element={<ProjectCaseStudyPage />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;