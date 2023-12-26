import Checkcontext from './checkcontext';
import { useState } from "react";

const Checkstate = (props) =>{

    const [log, logit] = useState(false);
    const [com, comit] = useState(false);
    const [side, oside] = useState(false);
    const [mvalue, savevalue] = useState('');
    const [bdata, store] = useState([]);
    const [loading, isloading] = useState(false);
    const [post, setpost] = useState(true);
    const [userid ,setid] = useState("");



    const openlog = () => {
        logit(true);
    }
    
    const closelog = () => {
        logit(false);
    }

    const opencom = () => {
        comit(true);
    }

    const closecom = () => {
        comit(false);
    }

    const openside = () => {
        
        oside(true);

    }
    const closeside = () => {
        
        oside(false);

    }
   
    const saveval = (v) =>{
        savevalue(v);
    }

    const storeblog = (data) => {
        store(data);
    }

    const loader = (x) =>{
        isloading(x);
    }

    const setdata = () =>{
        setpost(false);
    }
    
    const setuserid = (x) =>{
        setid(x);
    }

   return (
    <Checkcontext.Provider value={{setuserid,setdata,openlog, closelog,opencom,closecom,openside, closeside,saveval,savevalue, storeblog,store,loader,loading,userid,bdata,mvalue,side,com,log,post}}>
        {props.children}
    </Checkcontext.Provider>
   ); 
}

export default Checkstate;