import "./App.css";
import { useState } from "react";


//const arr = ["","","","","","","","",""];

function App() {
    const [arr,setArr] = useState(["","","","","","","","",""])
    const[winner,setWinner]= useState("Playing...")

  
    const [counter,setCounter] = useState(0);
    //const [sho,setSho] = useState(false);

    const check=(x)=>{
        


        if(counter%2==0){
            arr[x]="o";
            setCounter(counter+1);
            console.log(arr);
            if(winner!=="Playing..."){
                setWinner("Playing...");
            }
        }
        else{
            arr[x]="x";
            setCounter(counter+1);
            console.log(arr);
            if(winner!=="Playing..."){
                setWinner("Playing...");
            }
        }

        if((arr[0]===arr[1] && arr[1]===arr[2] &&arr[1]==="o") || (arr[3]===arr[4] && arr[4]===arr[5] &&arr[5]==="o") || (arr[7]===arr[6] && arr[7]===arr[8] &&arr[8]==="o") || (arr[0]===arr[1] && arr[1]===arr[2] &&arr[1]==="o") || (arr[0]===arr[4] && arr[4]===arr[8] &&arr[4]==="o") || (arr[2]===arr[4] && arr[4]===arr[6] &&arr[4]==="o") || (arr[0]===arr[3] && arr[3]===arr[6] &&arr[3]==="o") || (arr[1]===arr[4] && arr[7]===arr[2] &&arr[2]==="o") || (arr[2]===arr[5] && arr[5]===arr[8] &&arr[8]==="o")){
            setWinner("Player1");
            setArr(["","","","","","","","",""]);
        }


        if((arr[0]===arr[1] && arr[1]===arr[2] &&arr[1]==="x") || (arr[3]===arr[4] && arr[4]===arr[5] &&arr[5]==="x") || (arr[7]===arr[6] && arr[7]===arr[8] &&arr[8]==="x") || (arr[0]===arr[1] && arr[1]===arr[2] &&arr[1]==="x") || (arr[0]===arr[4] && arr[4]===arr[8] &&arr[8]==="x") || (arr[2]===arr[4] && arr[4]===arr[6] &&arr[6]==="x") || (arr[0]===arr[3] && arr[3]===arr[6] &&arr[1]==="6") || (arr[1]===arr[4] && arr[7]===arr[2] &&arr[2]==="x") || (arr[2]===arr[5] && arr[5]===arr[8] &&arr[8]==="x")){
            setWinner("Player2");
            setArr(["","","","","","","","",""]);
        }

    }

  return (
    <div className="App">
        <div>
            <span id="span1">player 1</span>
            <span id="span1">player 2</span>
        </div>
        <div>
            <span id="span2">o</span>
            <span id="span2">x</span>
        </div>

        <div className="box">
        <div>
            <div className="row">
                <span id="span3" onClick={()=>check(0)}>{arr[0]}</span>
                <span id="span3" onClick={()=>check(1)}>{arr[1]}</span>
                <span id="span3" onClick={()=>check(2)}>{arr[2]}</span>
            </div>
            <div className="row">
                <span id="span3" onClick={()=>check(3)}>{arr[3]}</span>
                <span id="span3" onClick={()=>check(4)}>{arr[4]}</span>
                <span id="span3" onClick={()=>check(5)}>{arr[5]}</span>
            </div>
            <div className="row">
                <span id="span3" onClick={()=>check(6)}>{arr[6]}</span>
                <span id="span3" onClick={()=>check(7)}>{arr[7]}</span>
                <span id="span3" onClick={()=>check(8)}>{arr[8]}</span>
            </div>
        </div>
        </div>

        <div className="win">
            <h3>Winner is {winner}</h3>
        </div>

    </div>
  );
}

export default App;
