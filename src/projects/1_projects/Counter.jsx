import { useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(0);

  const Increase = () =>  {
    setCount(Count+1);
  }
  const Decrease = () => {
    setCount((previous)=>{
      if(previous>0){
        previous = previous-1;
      }
      return previous;
    });
  }

  const createDouble = () => {
    setCount((previous)=>{
      return previous*2;
    })
   

  }

  return (
    <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
            <h1 className="text-center">Hi, Here is a counter for you.</h1>
            <p className="text-center">You can count your clicks by clicking on the buttons below</p>
        </div>
        <div className="row align-items-center justify-content-center">
          <h4 className="count text-center display-1">{Count}</h4>
          <div className="buttons d-flex justify-content-center gap-3">
            <button className="btn btn-primary button-1" onClick={Increase}>Increase</button>
            <button className="btn btn-warning button-2" onClick={Decrease}>Decrease</button>
            <button className="btn btn-secondary button-4" onClick={createDouble}>Double</button>
            <button className="btn btn-danger button-3" onClick={() => setCount(0)}>Reset all</button>
          </div>
        </div>
    </div>
  );
}

export default Counter;