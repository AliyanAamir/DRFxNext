import { Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

function DynamicColorRadio({ color, name, selectedValue, handleChange }) {
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: name,
    inputProps: { 'aria-label': item },
  });
  return (
    <Radio
      {...controlProps(color)}
      sx={{
        color: color,
        "&.Mui-checked": {
          color: color,
        },
      }}
    />
  );
}

export default function ColorRadioGroup({ colors }) {
  const [selectedValue, setSelectedValue] = useState(colors[0]);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <RadioGroup value={selectedValue} onChange={handleChange} row>
      {colors.map((color) => (
        <DynamicColorRadio key={color} color={color} name={color} selectedValue={selectedValue} handleChange={handleChange} />
      ))}
    </RadioGroup>
  );
}
