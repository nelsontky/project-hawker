import React from "react";
import { Transition } from "react-transition-group";

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms, transform ${duration}ms`,
  opacity: 0,
  transform: "translateY(20px)",
};

const transitionStyles = {
  entering: { opacity: 1, transform: "translateY(0)" },
  entered: { opacity: 1, transform: "translateY(0)" },
};

export default function FadeUp({ in: inProp, children, ...rest }) {
  return (
    <Transition in={inProp} timeout={duration} {...rest}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
