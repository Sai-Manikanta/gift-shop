import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PageScrollTop from './component/PageScrollTop';
import DigitalAgency from './home/DigitalAgency';
import Contact from "./elements/Contact";
import ServiceDetails from "./elements/ServiceDetails";
import reportWebVitals from './reportWebVitals';
import './index.scss';

// <DigitalAgency />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      {/* <PageScrollTop> */}
      <Routes>
        <Route path="/" element={<DigitalAgency />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whygiftnblessings" element={<ServiceDetails />} />

      </Routes>
      {/* </PageScrollTop> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
