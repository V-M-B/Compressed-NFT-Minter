"use client";

import React from "react";
import { Transition } from "@headlessui/react";

const TransitionContextProvider = ({ children }) => {
  const [isShowing, setIsShowing] = React.useState(false);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
    setTimeout(() => {
      setIsShowing(true);
    }, 500);
  }, []);

  if (!hasMounted) return null; // Prevent SSR mismatch

  return (
    <Transition
      show={isShowing}
      enter="transform transition duration-200 ease-in-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div>{children}</div>
    </Transition>
  );
};

export default TransitionContextProvider;