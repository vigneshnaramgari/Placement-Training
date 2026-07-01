import { useState } from "react";

export default function App(){
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [cnt, setCnt] = useState(0);
  return(
    <>
    <div className="text-center text-3xl font-bold text-grey-500 border-4 border-black-500 rounded-md p-4 m-4">
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} className="border-2 border-grey-500 rounded-md p-2 m-2" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} className="border-2 border-grey-500 rounded-md p-2 m-2" />
      
      <p className="text-green-500">Sum: {num1 && num2 ? Number(num1) + Number(num2) : 0}</p>
    </div>
    <div className="text-center text-3xl font-bold text-grey-500 border-4 border-black-500 rounded-md p-4 m-4">
      <button onClick={() => setCnt(cnt + 1)} className="bg-blue-500 text-white p-2 m-2 rounded-md">Increment:</button><p> {cnt}</p>
    </div>
    </> 
  
  );
}