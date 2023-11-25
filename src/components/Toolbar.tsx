"use client";

import React, { useId } from "react";

export const Toolbar = ({
  children,
  accent,
}: {
  children?: any;
  accent?: boolean;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(40);
  const [mode, setMode] = React.useState("icons_text");

  const id = useId();

  return (
    <>
      <div
        ref={ref}
        className={"toolbar"}
        data-accent={accent}
        data-mode={mode}
        style={{ "--height": height + "px" } as any}
      >
        {children}
      </div>

      <div className={"toolbar-controls"}>
        <label htmlFor={id}>Height</label>
        <input
          type="range"
          id={id}
          name={id}
          min={10}
          value={height}
          onChange={(e) => {
            if (!ref.current) return;
            const el = e.target as HTMLInputElement;

            setHeight(el.valueAsNumber);
          }}
        ></input>
        <span>{height}px</span>
        <div className={"toolbar-controls"}>
          <label htmlFor="icons_text">
            Icons and Text
            <input
              type="radio"
              name={"mode"}
              value={"icons_text"}
              id={"icons_text"}
              checked={mode === "icons_text"}
              onChange={(e) => setMode(e.target.value)}
            />
          </label>

          <label htmlFor="icons">
            Icons
            <input
              type="radio"
              name={"mode"}
              value={"icons"}
              id={"icons"}
              checked={mode === "icons"}
              onChange={(e) => setMode(e.target.value)}
            />
          </label>

          <label htmlFor="text">
            Text
            <input
              type="radio"
              name={"mode"}
              value={"text"}
              id={"text"}
              checked={mode === "text"}
              onChange={(e) => setMode(e.target.value)}
            />
          </label>
        </div>
        <button
          onClick={(e) => {
            setHeight(40);
            setMode("icons_text");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
