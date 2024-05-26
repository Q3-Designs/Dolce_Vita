import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy-loaded components
const Homepage = React.lazy(() => import('./components/homepage/homepage'));
const WhiteHome = React.lazy(() => import('./components/customHomes/whiteHome'));
const GreyHome = React.lazy(() => import('./components/retail/greyHome'));

const Booking = React.lazy(() => import('./components/booking/booking'));
const Commercial = React.lazy(() => import('./components/construction/ravenna'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="retail-homes" element={<GreyHome />} />
        <Route path="custom-homes" element={<WhiteHome />} />
        <Route path="commercial-construction" element={<Commercial />} />
        <Route path="contact" element={<Booking />} />
      </Routes>
    </Suspense>
  );
}

export default App;
