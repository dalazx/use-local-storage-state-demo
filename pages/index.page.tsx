import { useCallback, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";


function IndexPage() {
  const [item, setItem, {removeItem}] = useLocalStorageState("value");
  console.log(item);

  return (
    <>
      <button onClick={() => {setItem("value"); location.reload()}}>Set Value</button>
      <button onClick={() => {removeItem(); location.reload()}}>Reset Value</button>
    </>
  );
}

export default IndexPage;

