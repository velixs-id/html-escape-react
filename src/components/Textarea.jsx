import Button from "./Button";
import { useEffect, useId, useState } from "react";

export default function Textarea(props) {

  const textareaId = useId()

  function escapable() {
    if (typeof props.escapable !== "function") return
    props.escapable({
      value: document.getElementById(textareaId).value,
      id: textareaId,
      type: "textarea",
    })
  }

  function unescapeable() {
    if (typeof props.unescapeable !== "function") return
    props.unescapeable({
      value: document.getElementById(textareaId).value,
      id: textareaId,
      type: "textarea",
    })
  }

  function clearable() {
    document.getElementById(textareaId).value = ""
    if (typeof props.clearable !== "function") return
    props.clearable({
      id: textareaId,
      type: "textarea",
    })
  }

  function copyable() {
    navigator.clipboard.writeText(document.getElementById(textareaId).value)
  }
  return (
    <>
    <div className="mb-5">
      <div className="overflow-hidden rounded-lg border border-dashed border-gray-200 shadow-sm focus:ring-0">
        <textarea
          className="w-full border-none align-top focus:ring-0 sm:text-sm"
          rows="10"
          id={textareaId}
          value={props.value}
          placeholder={props.placeholder ?? "Enter html here..."}
        ></textarea>

        <div className="flex items-center justify-end gap-2 bg-white p-3">
          {props.clearable && (
            <Button
              text="Clear"
              onClick={clearable}
            />
          )}
          {props.escapable && (
            <Button
              text="Escape"
              onClick={escapable}
            />
          )}
          {props.unescapeable && (
            <Button
              text="Unescape"
              onClick={unescapeable}
            />
          )}
          {props.copyable && (
            <Button
              text="Copy"
              onClick={copyable}
            />
          )}
        </div>
      </div>
      </div>
    </>
  );
}
