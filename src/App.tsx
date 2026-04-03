import React from "react";
import WithTanstackQuery from "./components/3. WithTanstakQuery";
import Deduplication from "./components/4. Deduplication";
import FetchOneItem from "./components/5. FetchOneItem";
import StaleTime from "./components/6. StaleTime";
import RefetchInterval from "./components/7. RefetchInterval";
import FetchFromMultipleEndpoints from "./components/8. FetchFromMultipleEndpoints";
import MutateData from "./components/9. MutatingData";
import Pagination from "./components/10. Pagination";

const App = () => {
  return (
    <div>
      {/* <WithTanstackQuery /> */}
      {/* <Deduplication /> */}
      {/* <FetchOneItem /> */}
      {/* <StaleTime /> */}
      {/* <RefetchInterval /> */}
      {/* <FetchFromMultipleEndpoints /> */}
      {/* <MutateData /> */}
      <Pagination />
    </div>
  );
};

export default App;
