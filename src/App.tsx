import React from "react";
import WithTanstackQuery from "./components/3. WithTanstakQuery";
import Deduplication from "./components/4. Deduplication";
import FetchOneItem from "./components/5. FetchOneItem";
import StaleTime from "./components/6. StaleTime";

const App = () => {
  return (
    <div>
      {/* <WithTanstackQuery /> */}
      {/* <Deduplication /> */}
      {/* <FetchOneItem /> */}
      <StaleTime />
    </div>
  );
};

export default App;
