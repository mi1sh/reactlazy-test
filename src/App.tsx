import { useState, Suspense, lazy, FC } from "react";
import { Spin } from "antd";
import "./App.css";

const LazyComponent = lazy(() => import("./LazyComponent"));

const App: FC = () => {
  const [showLazy, setShowLazy] = useState<boolean>(false);

  return (
    <div className="container">
      {showLazy && (
        <Suspense fallback={<Spin />}>
          <LazyComponent />
        </Suspense>
      )}
      <button onClick={() => setShowLazy(true)}>
        Click for open Lazy component
      </button>
    </div>
  );
};

export default App;
