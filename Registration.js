import { useState } from "react";

let Registration=()=>{
    var [a,setA]=useState(null);
    var [b,setB]=useState(null);
    var [c,setC]=useState(null);
    var [d,setD]=useState(null);
    var [f,setF]=useState(null);
    var [g,setG]=useState(null);
    var [h,setH]=useState("");
    var [i,setI]=useState("");
    var [j,setJ]=useState("");
    var [k,setK]=useState("");
    var [l,setL]=useState(" ");
    var [m,setM]=useState("");
    var [n,setN]=useState("");

    let fun=(e)=>{
        setA(e.target.value);
    }
    let gender=(e)=>{
        setC(e.target.value);
    }
    let dropdown=(e)=>{
        setF(e.target.value);
    }
    let fun1=(e)=>{
        if(e.target.checked)
        {
            setH(e.target.value+" ");
        }
            else
            {
                setH("");
            } 
    }
    let fun2=(e)=>{
        if(e.target.checked)
        {
            setI(e.target.value+" ");
        }
        else
        {
            setI("");
        }
    }
    let fun3=(e)=>{
        if(e.target.checked)
        {
            setJ(e.target.value+" ");
        }
        else
        {
            setJ("");
        }
    }
    let fun4=(e)=>{
        if(e.target.checked)
        {
            setK(e.target.value+" ");
        }
        else
        {
            setK("")
        }
    }
    let dropdownlist=(e)=>{
        var z="";
        for(var i=0; i<e.target.length; i++)
        {
            if(e.target.options[i].selected)
            {
                z=z+e.target.options[i].value+" ";
            }
        }
        setM(z)
    }
    let Submitbtn=(e)=>{
        setB(a);
        setD(c);
        setG(f);
        setL(h+i+j+k)
        setN(m)
        e.preventDefault();
    }
    return(<div class="Hello">
        <h1>"Registration Form"</h1>
        <form>
            Name: <input type="text" placeholder="Enter your Name" onChange={(e)=>fun(e)}/>
            <br/><br/>
            Gender: <input type="radio" name="gender" value="Male" onChange={(e)=>gender(e)}/>Male
            <br/><input type="radio" name="gender" value="Female" onChange={(e)=>gender(e)}/>Female
            <br/><input type="radio" name="gender" value="Other" onChange={(e)=>gender(e)}/>Other
            <br/><br/>
            Course: <select onClick={(e)=>dropdown(e)}>
            <option value="">Select Course</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select><br/><br/>
            Country:<input type="checkbox" value="Dubai" name="amar1" onClick={(e)=>fun1(e)}/>Dubai
            <input type="checkbox" value="Japan" name="amar2" onClick={(e)=>fun2(e)}/>Japan
            <input type="checkbox" value="India" name="amar3" onClick={(e)=>fun3(e)}/>India
            <input type="checkbox" value="China" name="amar4" onClick={(e)=>fun4(e)}/>China
            <br/><br/>
            City: <select onChange={(e)=>dropdownlist(e)} multiple>
            <option value="">Select City</option>
                <option value="Agra">Agra</option>
                <option value="Indore">Indore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
            </select>
            <br/><br/> <button class="btn" onClick={(e)=>Submitbtn(e)}>Submit</button>
            <div><b><p>Your Name: {b}</p>
            <p>Gender: {d}</p>
            <p>Course: {g}</p>
            <p>Country: {l}</p>
            <p>City: {n}</p></b></div>
        </form>                
    </div>  
    );
}
export default Registration;