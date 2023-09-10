import { useState } from "react";

function App() {
  const colors = [
    { name: "Red", colCode: "red" },
    { name: "Green", colCode: "green" },
    { name: "Blue", colCode: "blue" },
    { name: "Yellow", colCode: "yellow" },
    { name: "Orange", colCode: "orange" },
    { name: "Black", colCode: "black" },
    { name: "Gray", colCode: "gray" },
  ];
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="text-center w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            {/* <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-slate-500"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button> */}
            {colors.map((col, id) => (
              <button
                key={id}
                onClick={() => setColor(col.colCode)}
                className={`outline-none px-6 py-2 font-sans rounded-full ${
                  col.colCode === "yellow" ? "text-slate-900" : "text-white"
                }`}
                style={{ backgroundColor: col.colCode }}
              >
                {col.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
