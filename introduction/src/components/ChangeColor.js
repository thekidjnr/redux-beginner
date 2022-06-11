import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeTheme(color));
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
}

export default ChangeColor;
