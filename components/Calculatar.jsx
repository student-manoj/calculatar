import { useState } from "react";

const Calculatar = () => {
  const [num, setNem] = useState(0);
  const [num1, setNem1] = useState(0);
  const [num2, setNem2] = useState(0);

  const gatData = (e) => {
    let input = e.target.value;

    if (num === 0) {
      setNem(input);
    } else {
      setNem(num + input);
    }
  };

  const clear = () => {
    setNem(0);
  };

  const porcentage = () => {
    setNem(num / 100);
  };
  const plusMinus = () => {
    if (num > 0) {
      setNem(-num);
    } else {
      setNem(Math.ans(num));
    }
  };

  const number = (e) => {
    let numberInput = e.target.value;
    setNem2(numberInput);
    setNem1(num);
    setNem(0);
  };

  const equalto = () => {
    if (num2 === "/") {
      setNem(num1 / num);
    }
    if (num2 === "X") {
      setNem(num1 * num);
    }
    if (num2 === "-") {
      setNem(num1 - num);
    }
    if (num2 === "+") {
      setNem(parseFloat(num1) + parseFloat(num));
    }
  };

  return (
    <>
      <div className="grid grid-flow-col place-items-center h-screen bg-slate-900/90">
        <div className="flex flex-col items-center gap-10">
          <div className="text-white text-5xl font-bold rounded-full">
            Calculatar
          </div>
          <div className=" p-2 rounded-lg bg-black md:w-80 w-64 md:h-96 h-[330px] shadow-lg shadow-gray-500 ">
            <hi className=" flex justify-end text-white p-7">{num}</hi>
            <div className="grid grid-rows-5 grid-cols-4 md:gap-3 gap-2">
              <button onClick={clear} className="text-black md:p-3 p-2 bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                AC
              </button>
              <button onClick={plusMinus} className="text-black bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                +/-
              </button>
              <button onClick={porcentage} value={"%"} className="text-black bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                %
              </button>
              <button onClick={number} value={"/"} className="text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                /
              </button>

              <button onClick={gatData} value={7} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                7
              </button>
              <button onClick={gatData} value={8} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                8
              </button>
              <button onClick={gatData} value={9} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                9
              </button>
              <button onClick={number} value={"X"} className="text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                X
              </button>

              <button onClick={gatData} value={4} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                4
              </button>
              <button onClick={gatData} value={5} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                5
              </button>
              <button onClick={gatData} value={6} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                6
              </button>
              <button onClick={number} value={"-"} className="text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                -
              </button>

              <button onClick={gatData} value={1}
                className="text-white  bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md"
              >
                1
              </button>
              <button onClick={gatData} value={2} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                2
              </button>
              <button onClick={gatData} value={3} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                3
              </button>
              <button onClick={number} value={"+"} className="text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                +
              </button>

              <button onClick={gatData} value={0} className="text-white bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-md">
                0
              </button>

              <button onClick={gatData} value={"."} className="text-white bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                .
              </button>
              <button onClick={equalto} className="text-white col-span-2 bg-gradient-to-b from-blue-700 to-blue-900 rounded-md">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculatar;
