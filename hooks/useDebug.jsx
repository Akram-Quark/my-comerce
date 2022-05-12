import React from "react";
import { useEffect } from "react";
function useDebug(dep, val) {
  useEffect(() => {
    console.log(val);
  }, [dep]);
}

export default useDebug;
