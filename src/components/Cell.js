import React, { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";

export default function Cell({
  value: initialValue,
  row: { index },
  column: { id, dataType, options },
  dataDispatch,
}) {
  const [value, setValue] = useState({ value: initialValue, update: false });
  const onChange = (e) => {
    setValue({ value: e.target.value, update: false });
  };

  useEffect(() => {
    setValue({ value: initialValue, update: false });
  }, [initialValue]);

  const handleUpdate = (id, initialValue, value) => {
    let url = `https://sheetdb.io/api/v1/46h3j5y8r4kdw/${id}/${initialValue}`;
    console.log(url);
    console.log(id, value.value);
    let data = {};
    data[id] = value.value;
    fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    if (value.update && value.value !== initialValue) {
      dataDispatch({
        type: "update_cell",
        columnId: id,
        rowIndex: index,
        value: value.value,
      });

      console.log(id, initialValue, value.value);
    }

    if (value.update && value.value !== initialValue && initialValue) {
      handleUpdate(id, initialValue, value);
    }
  }, [value, dataDispatch, id, index]);

  let element;
  switch (dataType) {
    case "text":
      element = (
        <ContentEditable
          html={(value.value && value.value.toString()) || ""}
          onChange={onChange}
          onBlur={() => setValue((old) => ({ value: old.value, update: true }))}
          className="data-input"
        />
      );
      break;
    case "number":
      element = (
        <ContentEditable
          html={(value.value && value.value.toString()) || ""}
          onChange={onChange}
          onBlur={() => setValue((old) => ({ value: old.value, update: true }))}
          className="data-input text-align-right"
        />
      );
      break;
    default:
      element = <span></span>;
      break;
  }

  return element;
}
