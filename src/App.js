import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLayout from './page-layout/PageLayout';
import CalculatorComponent from './calculator/CalculatorComponent';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<CalculatorComponent />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
