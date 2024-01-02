import './seat.css'
import Bottom from '../bottom/bottom';
import { useRef,useState,useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkcontext from '../../context/checkcontext';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {setdate, setlocation, setshowtime, setseat,setmid, setdetail, setcity, setuid, setvalidity} from '../../redux/ticketslice';



function Seat(){

        const ticket = useSelector((state)=> state.ticket)
        const dispatch = useDispatch()
        console.log("ticket", ticket)


        const [but,showbut] = useState(false)
        const [total,settotal] = useState(0)
        const [count,setcount] = useState(0)

        const navigate = useNavigate()
        const a = useContext(checkcontext);


       //A 
        const refa1 = useRef();
        const refa2 = useRef();
        const refa3 = useRef();
        const refa4 = useRef();
        const refa5 = useRef();
        const refa6 = useRef();
        const refa7 = useRef();
        const refa8 = useRef();
        const refa9 = useRef();
        const refa10 = useRef();
        const refa11 = useRef();
        const refa12 = useRef();
        const refa13 = useRef();
        const refa14 = useRef();
        const refa15 = useRef();
        const refa16 = useRef();
        const refa17= useRef();
        const refa18 = useRef();
        const refa19 = useRef();
        const refa20 = useRef();
        const refa21 = useRef();
        const refa22 = useRef();
        const refa23 = useRef();
        const refa24 = useRef();
        const refa25 = useRef();
        const refa26 = useRef();

        //B

        const refb1 = useRef();
        const refb2 = useRef();
        const refb3 = useRef();
        const refb4 = useRef();
        const refb5 = useRef();
        const refb6 = useRef();
        const refb7 = useRef();
        const refb8 = useRef();
        const refb9 = useRef();
        const refb10 = useRef();
        const refb11 = useRef();
        const refb12 = useRef();
        const refb13 = useRef();
        const refb14 = useRef();
        const refb15 = useRef();
        const refb16 = useRef();
        const refb17= useRef();
        const refb18 = useRef();
        const refb19 = useRef();
        const refb20 = useRef();
        const refb21 = useRef();
        const refb22 = useRef();
        const refb23 = useRef();
        const refb24 = useRef();
        const refb25 = useRef();
        const refb26 = useRef();

        // C

        const refc1 = useRef();
        const refc2 = useRef();
        const refc3 = useRef();
        const refc4 = useRef();
        const refc5 = useRef();
        const refc6 = useRef();
        const refc7 = useRef();
        const refc8 = useRef();
        const refc9 = useRef();
        const refc10 = useRef();
        const refc11 = useRef();
        const refc12 = useRef();
        const refc13 = useRef();
        const refc14 = useRef();
        const refc15 = useRef();
        const refc16 = useRef();
        const refc17= useRef();
        const refc18 = useRef();
        const refc19 = useRef();
        const refc20 = useRef();
        const refc21 = useRef();
        const refc22 = useRef();
        const refc23 = useRef();
        const refc24 = useRef();
        const refc25 = useRef();
        const refc26 = useRef();

        //D

        const refd1 = useRef();
        const refd2 = useRef();
        const refd3 = useRef();
        const refd4 = useRef();
        const refd5 = useRef();
        const refd6 = useRef();
        const refd7 = useRef();
        const refd8 = useRef();
        const refd9 = useRef();
        const refd10 = useRef();
        const refd11 = useRef();
        const refd12 = useRef();
        const refd13 = useRef();
        const refd14 = useRef();
        const refd15 = useRef();
        const refd16 = useRef();
        const refd17= useRef();
        const refd18 = useRef();
        const refd19 = useRef();
        const refd20 = useRef();
        const refd21 = useRef();
        const refd22 = useRef();
        const refd23 = useRef();
        const refd24 = useRef();
        const refd25 = useRef();
        const refd26 = useRef();

        //E

        const refe1 = useRef();
        const refe2 = useRef();
        const refe3 = useRef();
        const refe4 = useRef();
        const refe5 = useRef();
        const refe6 = useRef();
        const refe7 = useRef();
        const refe8 = useRef();
        const refe9 = useRef();
        const refe10 = useRef();
        const refe11 = useRef();
        const refe12 = useRef();
        const refe13 = useRef();
        const refe14 = useRef();
        const refe15 = useRef();
        const refe16 = useRef();
        const refe17= useRef();
        const refe18 = useRef();
        const refe19 = useRef();
        const refe20 = useRef();
        const refe21 = useRef();
        const refe22 = useRef();
        const refe23 = useRef();
        const refe24 = useRef();
        const refe25 = useRef();
        const refe26 = useRef();

        //F

        const reff1 = useRef();
        const reff2 = useRef();
        const reff3 = useRef();
        const reff4 = useRef();
        const reff5 = useRef();
        const reff6 = useRef();
        const reff7 = useRef();
        const reff8 = useRef();
        const reff9 = useRef();
        const reff10 = useRef();
        const reff11 = useRef();
        const reff12 = useRef();
        const reff13 = useRef();
        const reff14 = useRef();
        const reff15 = useRef();
        const reff16 = useRef();
        const reff17= useRef();
        const reff18 = useRef();
        const reff19 = useRef();
        const reff20 = useRef();
        const reff21 = useRef();
        const reff22 = useRef();
        const reff23 = useRef();
        const reff24 = useRef();
        const reff25 = useRef();
        const reff26 = useRef();

        //G

        const refg1 = useRef();
        const refg2 = useRef();
        const refg3 = useRef();
        const refg4 = useRef();
        const refg5 = useRef();
        const refg6 = useRef();
        const refg7 = useRef();
        const refg8 = useRef();
        const refg9 = useRef();
        const refg10 = useRef();
        const refg11 = useRef();
        const refg12 = useRef();
        const refg13 = useRef();
        const refg14 = useRef();
        const refg15 = useRef();
        const refg16 = useRef();
        const refg17= useRef();
        const refg18 = useRef();
        const refg19 = useRef();
        const refg20 = useRef();
        const refg21 = useRef();
        const refg22 = useRef();
        const refg23 = useRef();
        const refg24 = useRef();
        const refg25 = useRef();
        const refg26 = useRef();

        //H

        const refh1 = useRef();
        const refh2 = useRef();
        const refh3 = useRef();
        const refh4 = useRef();
        const refh5 = useRef();
        const refh6 = useRef();
        const refh7 = useRef();
        const refh8 = useRef();
        const refh9 = useRef();
        const refh10 = useRef();
        const refh11 = useRef();
        const refh12 = useRef();
        const refh13 = useRef();
        const refh14 = useRef();
        const refh15 = useRef();
        const refh16 = useRef();
        const refh17= useRef();
        const refh18 = useRef();
        const refh19 = useRef();
        const refh20 = useRef();
        const refh21 = useRef();
        const refh22 = useRef();
        const refh23 = useRef();
        const refh24 = useRef();
        const refh25 = useRef();
        const refh26 = useRef();

        //I

        const refi1 = useRef();
        const refi2 = useRef();
        const refi3 = useRef();
        const refi4 = useRef();
        const refi5 = useRef();
        const refi6 = useRef();
        const refi7 = useRef();
        const refi8 = useRef();
        const refi9 = useRef();
        const refi10 = useRef();
        const refi11 = useRef();
        const refi12 = useRef();
        const refi13 = useRef();
        const refi14 = useRef();
        const refi15 = useRef();
        const refi16 = useRef();
        const refi17= useRef();
        const refi18 = useRef();
        const refi19 = useRef();
        const refi20 = useRef();
        const refi21 = useRef();
        const refi22 = useRef();
        const refi23 = useRef();
        const refi24 = useRef();
        const refi25 = useRef();
        const refi26 = useRef();

        //J

        const refj1 = useRef();
        const refj2 = useRef();
        const refj3 = useRef();
        const refj4 = useRef();
        const refj5 = useRef();
        const refj6 = useRef();
        const refj7 = useRef();
        const refj8 = useRef();
        const refj9 = useRef();
        const refj10 = useRef();
        const refj11 = useRef();
        const refj12 = useRef();
        const refj13 = useRef();
        const refj14 = useRef();
        const refj15 = useRef();
        const refj16 = useRef();
        const refj17= useRef();
        const refj18 = useRef();
        const refj19 = useRef();
        const refj20 = useRef();
        const refj21 = useRef();
        const refj22 = useRef();
        const refj23 = useRef();
        const refj24 = useRef();
        const refj25 = useRef();
        const refj26 = useRef();

        //K

        const refk1 = useRef();
        const refk2 = useRef();
        const refk3 = useRef();
        const refk4 = useRef();
        const refk5 = useRef();
        const refk6 = useRef();
        const refk7 = useRef();
        const refk8 = useRef();
        const refk9 = useRef();
        const refk10 = useRef();
        const refk11 = useRef();
        const refk12 = useRef();
        const refk13 = useRef();
        const refk14 = useRef();
        const refk15 = useRef();
        const refk16 = useRef();
        const refk17= useRef();
        const refk18 = useRef();
        const refk19 = useRef();
        const refk20 = useRef();
        const refk21 = useRef();
        const refk22 = useRef();
        const refk23 = useRef();
        const refk24 = useRef();
        const refk25 = useRef();
        const refk26 = useRef();

        //L

        const refl1 = useRef();
        const refl2 = useRef();
        const refl3 = useRef();
        const refl4 = useRef();
        const refl5 = useRef();
        const refl6 = useRef();
        const refl7 = useRef();
        const refl8 = useRef();
        const refl9 = useRef();
        const refl10 = useRef();
        const refl11 = useRef();
        const refl12 = useRef();
        const refl13 = useRef();
        const refl14 = useRef();
        const refl15 = useRef();
        const refl16 = useRef();
        const refl17= useRef();
        const refl18 = useRef();
        const refl19 = useRef();
        const refl20 = useRef();
        const refl21 = useRef();
        const refl22 = useRef();
        const refl23 = useRef();
        const refl24 = useRef();
        const refl25 = useRef();
        const refl26 = useRef();

        //M

        const refm1 = useRef();
        const refm2 = useRef();
        const refm3 = useRef();
        const refm4 = useRef();
        const refm5 = useRef();
        const refm6 = useRef();
        const refm7 = useRef();
        const refm8 = useRef();
        const refm9 = useRef();
        const refm10 = useRef();
        const refm11 = useRef();
        const refm12 = useRef();
        const refm13 = useRef();
        const refm14 = useRef();
        const refm15 = useRef();
        const refm16 = useRef();
        const refm17= useRef();
        const refm18 = useRef();
        const refm19 = useRef();
        const refm20 = useRef();
        const refm21 = useRef();
        const refm22 = useRef();
        const refm23 = useRef();
        const refm24 = useRef();
        const refm25 = useRef();
        const refm26 = useRef();

        //N

        const refn1 = useRef();
        const refn2 = useRef();
        const refn3 = useRef();
        const refn4 = useRef();
        const refn5 = useRef();
        const refn6 = useRef();
        const refn7 = useRef();
        const refn8 = useRef();
        const refn9 = useRef();
        const refn10 = useRef();
        const refn11 = useRef();
        const refn12 = useRef();
        const refn13 = useRef();
        const refn14 = useRef();
        const refn15 = useRef();
        const refn16 = useRef();
        const refn17= useRef();
        const refn18 = useRef();
        const refn19 = useRef();
        const refn20 = useRef();
        const refn21 = useRef();
        const refn22 = useRef();
        const refn23 = useRef();
        const refn24 = useRef();
        const refn25 = useRef();
        const refn26 = useRef();

        //O

        const refo1 = useRef();
        const refo2 = useRef();
        const refo3 = useRef();
        const refo4 = useRef();
        const refo5 = useRef();
        const refo6 = useRef();
        const refo7 = useRef();
        const refo8 = useRef();
        const refo9 = useRef();
        const refo10 = useRef();
        const refo11 = useRef();
        const refo12 = useRef();
        const refo13 = useRef();
        const refo14 = useRef();
        const refo15 = useRef();
        const refo16 = useRef();
        const refo17= useRef();
        const refo18 = useRef();
        const refo19 = useRef();
        const refo20 = useRef();
        const refo21 = useRef();
        const refo22 = useRef();
        const refo23 = useRef();
        const refo24 = useRef();
        const refo25 = useRef();
        const refo26 = useRef();

        //P

        const refp1 = useRef();
        const refp2 = useRef();
        const refp3 = useRef();
        const refp4 = useRef();
        const refp5 = useRef();
        const refp6 = useRef();
        const refp7 = useRef();
        const refp8 = useRef();
        const refp9 = useRef();
        const refp10 = useRef();
        const refp11 = useRef();
        const refp12 = useRef();
        const refp13 = useRef();
        const refp14 = useRef();
        const refp15 = useRef();
        const refp16 = useRef();
        const refp17= useRef();

        //Q

        const refq1 = useRef();
        const refq2 = useRef();
        const refq3 = useRef();
        const refq4 = useRef();
        const refq5 = useRef();
        const refq6 = useRef();
        const refq7 = useRef();
        const refq8 = useRef();
        const refq9 = useRef();
        const refq10 = useRef();
        const refq11 = useRef();
        const refq12 = useRef();
        const refq13 = useRef();
        const refq14 = useRef();
        const refq15 = useRef();
        const refq16 = useRef();
        const refq17= useRef();

        //R

        const refr1 = useRef();
        const refr2 = useRef();
        const refr3 = useRef();
        const refr4 = useRef();
        const refr5 = useRef();
        const refr6 = useRef();
        const refr7 = useRef();
        const refr8 = useRef();
        const refr9 = useRef();
        const refr10 = useRef();
        const refr11 = useRef();
        const refr12 = useRef();
        const refr13 = useRef();
        const refr14 = useRef();
        const refr15 = useRef();
        const refr16 = useRef();
        const refr17= useRef();

        const [seat , fillseat] = useState([]);
       

        const checkseat = async ()=>{
                if(ticket){
                        const data = await (await axios.post('http://localhost:8080/api/ticket/getticket',{showlocation: ticket.showlocation, city: ticket.city ,  showtime : ticket.showtime}, {showdate: ticket.showdate}, {moviename: ticket.moviename})).data;
                if(data){
                        console.log("data",data)
                //        { (data.seatno).map((item)=>{
                //           ("ref"+item).current.style.backgroundColor = "rgba(70, 69, 69, 0.511)"
                //           item.current.style.color = "white"
                //           item.current.style.border = "none"
                //        })}

                }
                }
        }
        

        useEffect(()=>{
                checkseat()
        },[])

        const handleclick = (x) =>{
                showbut(true)
              if(  x.current.style.backgroundColor ==="rgb(25, 118, 25)" && x.current.style.color === "white" &&   x.current.style.border === "none"){
                     x.current.style.backgroundColor = "white"
                     x.current.style.color = "rgb(34, 184, 34)"
                     x.current.style.border = "1px solid rgb(34, 184, 34)"
                     setcount((prev)=> prev+1);
                     
                     
                     if(total-1 === count){
                        showbut(false)
                        settotal(0)
                        setcount(0)
                      }
              }
              
              else{
                x.current.style.backgroundColor ="rgb(25, 118, 25)" 
                x.current.style.color = "white" 
                x.current.style.border = "none"
                fillseat(seat.concat(x.current.id))
                settotal((prev)=> prev+1);
              
              }

              
                
        }


        const makeorder = async ()=>{
               await a.storeblog(seat);
               dispatch(setseat(seat));
                navigate('/order')

        }

    return(
        <div id="seat">
                <div id="layout">
                    <div id="lounge">
                        <h4>MM-LOUNGE Rs -210.00</h4>
                        <br />
                        
                        <div id="A">
                            <h4>A</h4>
                            <div className="sb" id='a1' ref={refa1} onClick={()=>{handleclick(refa1)}}>1</div>
                            <div className="sb" id='a2' ref={refa2} onClick={()=>{handleclick(refa2)}}>2</div>
                            <div className="sb" id='a3' ref={refa3} onClick={()=>{handleclick(refa3)}}>3</div>
                            <div className="sb" id='a4' ref={refa4} onClick={()=>{handleclick(refa4)}} >4</div>
                            <div className="sb" id='a5' ref={refa5} onClick={()=>{handleclick(refa5)}} >5</div>
                            <div className="sb" id='a6' ref={refa6} onClick={()=>{handleclick(refa6)}} >6</div>
                            <div className="sb" id='a7' ref={refa7} onClick={()=>{handleclick(refa7)}} >7</div>
                            <div className="sb" id='a8' ref={refa8} onClick={()=>{handleclick(refa8)}} >8</div>
                            <div className="sb" id='a9' ref={refa9} onClick={()=>{handleclick(refa9)}} >9</div>
                            <div className="sb" id='a10' ref={refa10} onClick={()=>{handleclick(refa10)}} >10</div>
                            <div className="sb" id='a11' ref={refa11} onClick={()=>{handleclick(refa11)}} >11</div>
                            <div className="sb" id='a12' ref={refa12} onClick={()=>{handleclick(refa12)}} >12</div>
                            <div className="sb" id='a13' ref={refa13} onClick={()=>{handleclick(refa13)}} >13</div>
                            <div className="sb" id='a14' ref={refa14} onClick={()=>{handleclick(refa14)}} >14</div>
                            <div className="sb" id='a15' ref={refa15} onClick={()=>{handleclick(refa15)}} >15</div>
                            <div className="sb" id='a16' ref={refa16} onClick={()=>{handleclick(refa16)}} >16</div>
                            <div className="sb" id='a17' ref={refa17} onClick={()=>{handleclick(refa17)}} >17</div>
                            <div className="sb" id='a18' ref={refa18} onClick={()=>{handleclick(refa18)}} >18</div>
                            <div className="sb" id='a19' ref={refa19} onClick={()=>{handleclick(refa19)}} >19</div>
                            <div className="sb" id='a20' ref={refa20} onClick={()=>{handleclick(refa20)}} >20</div>
                            <div className="sb" id='a21' ref={refa21} onClick={()=>{handleclick(refa21)}} >21</div>
                            <div className="sb" id='a22' ref={refa22} onClick={()=>{handleclick(refa22)}} >22</div>
                            <div className="sb" id='a23' ref={refa23} onClick={()=>{handleclick(refa23)}} >23</div>
                            <div className="sb" id='a24' ref={refa24} onClick={()=>{handleclick(refa24)}} >24</div>
                            <div className="sb" id='a25' ref={refa25} onClick={()=>{handleclick(refa25)}} >25</div>
                            <div className="sb" id='a26' ref={refa26} onClick={()=>{handleclick(refa26)}} >26</div>
                        </div>
                    </div>

                <div id="plat">
                    <br />
                    <h4>PLATINUM Rs-110.00</h4>
                    <br />
                    <div id="B">
                            <h4>B</h4>
                            <div className="sb" id='b1'  ref={refb1} onClick={()=>{handleclick(refb1)}}>1</div>
                            <div className="sb" id='b2' ref={refb2} onClick={()=>{handleclick(refb2)}}>2</div>
                            <div className="sb" id='b3' ref={refb3} onClick={()=>{handleclick(refb3)}}>3</div>
                            <div className="sb" id='b4' ref={refb4} onClick={()=>{handleclick(refb4)}}>4</div>
                            <div className="sb" id='b5' ref={refb5} onClick={()=>{handleclick(refb5)}}>5</div>
                            <div className="sb" id='b6' ref={refb6} onClick={()=>{handleclick(refb6)}}>6</div>
                            <div className="sb" id='b7' ref={refb7} onClick={()=>{handleclick(refb7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='b8' ref={refb8} onClick={()=>{handleclick(refb8)}}>8</div>
                            <div className="sb" id='b9' ref={refb9} onClick={()=>{handleclick(refb9)}}>9</div>
                            <div className="sb" id='b10' ref={refb10} onClick={()=>{handleclick(refb10)}}>10</div>
                            <div className="sb" id='b11' ref={refb11} onClick={()=>{handleclick(refb11)}}>11</div>
                            <div className="sb" id='b12' ref={refb12} onClick={()=>{handleclick(refb12)}}>12</div>
                            <div className="sb" id='b13' ref={refb13} onClick={()=>{handleclick(refb13)}}>13</div>
                            <div className="sb" id='b14' ref={refb14} onClick={()=>{handleclick(refb14)}}>14</div>
                            <div className="sb" id='b15' ref={refb15} onClick={()=>{handleclick(refb15)}}>15</div>
                            <div className="sb" id='b16' ref={refb16} onClick={()=>{handleclick(refb16)}}>16</div>
                            <div className="sb" id='b17' ref={refb17} onClick={()=>{handleclick(refb17)}}>17</div>
                            <div className="sb" id='b18' ref={refb18} onClick={()=>{handleclick(refb18)}}>18</div>
                            <div className="sb" id='b19' ref={refb19} onClick={()=>{handleclick(refb19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='b20' ref={refb20} onClick={()=>{handleclick(refb20)}}>20</div>
                            <div className="sb" id='b21' ref={refb21} onClick={()=>{handleclick(refb21)}}>21</div>
                            <div className="sb" id='b22' ref={refb22} onClick={()=>{handleclick(refb22)}}>22</div>
                            <div className="sb" id='b23' ref={refb23} onClick={()=>{handleclick(refb23)}}>23</div>
                            <div className="sb" id='b24' ref={refb24} onClick={()=>{handleclick(refb24)}}>24</div>
                            <div className="sb" id='b25' ref={refb25} onClick={()=>{handleclick(refb25)}}>25</div>
                            <div className="sb" id='b26' ref={refb26} onClick={()=>{handleclick(refb26)}}>26</div>
                    </div>


                    <div id="C">
                            <h4>C</h4>
                            <div className="sb" id='c1' ref={refc1} onClick={()=>{handleclick(refc1)}}>1</div>
                            <div className="sb" id='c2' ref={refc2} onClick={()=>{handleclick(refc2)}}>2</div>
                            <div className="sb" id='c3' ref={refc3} onClick={()=>{handleclick(refc3)}}>3</div>
                            <div className="sb" id='c4' ref={refc4} onClick={()=>{handleclick(refc4)}}>4</div>
                            <div className="sb" id='c5' ref={refc5} onClick={()=>{handleclick(refc5)}}>5</div>
                            <div className="sb" id='c6' ref={refc6} onClick={()=>{handleclick(refc6)}}>6</div>
                            <div className="sb" id='c7' ref={refc7} onClick={()=>{handleclick(refc7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='c8' ref={refc8} onClick={()=>{handleclick(refc8)}}>8</div>
                            <div className="sb" id='c9' ref={refc9} onClick={()=>{handleclick(refc9)}}>9</div>
                            <div className="sb" id='c10' ref={refc10} onClick={()=>{handleclick(refc10)}}>10</div>
                            <div className="sb" id='c11' ref={refc11} onClick={()=>{handleclick(refc11)}}>11</div>
                            <div className="sb" id='c12' ref={refc12} onClick={()=>{handleclick(refc12)}}>12</div>
                            <div className="sb" id='c13' ref={refc13} onClick={()=>{handleclick(refc13)}}>13</div>
                            <div className="sb" id='c14' ref={refc14} onClick={()=>{handleclick(refc14)}}>14</div>
                            <div className="sb" id='c15' ref={refc15} onClick={()=>{handleclick(refc15)}}>15</div>
                            <div className="sb" id='c16' ref={refc16} onClick={()=>{handleclick(refc16)}}>16</div>
                            <div className="sb" id='c17' ref={refc17} onClick={()=>{handleclick(refc17)}}>17</div>
                            <div className="sb" id='c18' ref={refc18} onClick={()=>{handleclick(refc18)}}>18</div>
                            <div className="sb" id='c19' ref={refc19} onClick={()=>{handleclick(refc19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='c20' ref={refc20} onClick={()=>{handleclick(refc20)}}>20</div>
                            <div className="sb" id='c21' ref={refc21} onClick={()=>{handleclick(refc21)}}>21</div>
                            <div className="sb" id='c22' ref={refc22} onClick={()=>{handleclick(refc22)}}>22</div>
                            <div className="sb" id='c23' ref={refc23} onClick={()=>{handleclick(refc23)}}>23</div>
                            <div className="sb" id='c24' ref={refc24} onClick={()=>{handleclick(refc24)}}>24</div>
                            <div className="sb" id='c25' ref={refc25} onClick={()=>{handleclick(refc25)}}>25</div>
                            <div className="sb" id='c26' ref={refc26} onClick={()=>{handleclick(refc26)}}>26</div>
                    </div>


                    <div id="D">
                            <h4>D</h4>
                            <div className="sb" id='d1' ref={refd1} onClick={()=>{handleclick(refd1)}}>1</div>
                            <div className="sb" id='d2' ref={refd2} onClick={()=>{handleclick(refd2)}}>2</div>
                            <div className="sb" id='d3' ref={refd3} onClick={()=>{handleclick(refd3)}}>3</div>
                            <div className="sb" id='d4' ref={refd4} onClick={()=>{handleclick(refd4)}}>4</div>
                            <div className="sb" id='d5' ref={refd5} onClick={()=>{handleclick(refd5)}}>5</div>
                            <div className="sb" id='d6' ref={refd6} onClick={()=>{handleclick(refd6)}}>6</div>
                            <div className="sb" id='d7' ref={refd7} onClick={()=>{handleclick(refd7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='d8' ref={refd8} onClick={()=>{handleclick(refd8)}}>8</div>
                            <div className="sb" id='d9' ref={refd9} onClick={()=>{handleclick(refd9)}}>9</div>
                            <div className="sb" id='d10' ref={refd10} onClick={()=>{handleclick(refd10)}}>10</div>
                            <div className="sb" id='d11' ref={refd11} onClick={()=>{handleclick(refd11)}}>11</div>
                            <div className="sb" id='d12' ref={refd12} onClick={()=>{handleclick(refd12)}}>12</div>
                            <div className="sb" id='d13' ref={refd13} onClick={()=>{handleclick(refd13)}}>13</div>
                            <div className="sb" id='d14' ref={refd14} onClick={()=>{handleclick(refd14)}}>14</div>
                            <div className="sb" id='d15' ref={refd15} onClick={()=>{handleclick(refd15)}}>15</div>
                            <div className="sb" id='d16' ref={refd16} onClick={()=>{handleclick(refd16)}}>16</div>
                            <div className="sb" id='d17' ref={refd17} onClick={()=>{handleclick(refd17)}}>17</div>
                            <div className="sb" id='d18' ref={refd18} onClick={()=>{handleclick(refd18)}}>18</div>
                            <div className="sb" id='d19' ref={refd19} onClick={()=>{handleclick(refd19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='d20' ref={refd20} onClick={()=>{handleclick(refd20)}}>20</div>
                            <div className="sb" id='d21' ref={refd21} onClick={()=>{handleclick(refd21)}}>21</div>
                            <div className="sb" id='d22' ref={refd22} onClick={()=>{handleclick(refd22)}}>22</div>
                            <div className="sb" id='d23' ref={refd23} onClick={()=>{handleclick(refd23)}}>23</div>
                            <div className="sb" id='d24' ref={refd24} onClick={()=>{handleclick(refd24)}}>24</div>
                            <div className="sb" id='d25' ref={refd25} onClick={()=>{handleclick(refd25)}}>25</div>
                            <div className="sb" id='d26' ref={refd26} onClick={()=>{handleclick(refd26)}}>26</div>
                    </div>


                    <div id="E">
                            <h4>E</h4>
                           <div className="sb" id='e1' ref={refe1} onClick={()=>{handleclick(refe1)}}>1</div>
                            <div className="sb" id='e2' ref={refe2} onClick={()=>{handleclick(refe2)}}>2</div>
                            <div className="sb" id='e3' ref={refe3} onClick={()=>{handleclick(refe3)}}>3</div>
                            <div className="sb" id='e4' ref={refe4} onClick={()=>{handleclick(refe4)}}>4</div>
                            <div className="sb" id='e5' ref={refe5} onClick={()=>{handleclick(refe5)}}>5</div>
                            <div className="sb" id='e6' ref={refe6} onClick={()=>{handleclick(refe6)}}>6</div>
                            <div className="sb" id='e7' ref={refe7} onClick={()=>{handleclick(refe7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='e8' ref={refe8} onClick={()=>{handleclick(refe8)}}>8</div>
                            <div className="sb" id='e9' ref={refe9} onClick={()=>{handleclick(refe9)}}>9</div>
                            <div className="sb" id='e10' ref={refe10} onClick={()=>{handleclick(refe10)}}>10</div>
                            <div className="sb" id='e11' ref={refe11} onClick={()=>{handleclick(refe11)}}>11</div>
                            <div className="sb" id='e12' ref={refe12} onClick={()=>{handleclick(refe12)}}>12</div>
                            <div className="sb" id='e13' ref={refe13} onClick={()=>{handleclick(refe13)}}>13</div>
                            <div className="sb" id='e14' ref={refe14} onClick={()=>{handleclick(refe14)}}>14</div>
                            <div className="sb" id='e15' ref={refe15} onClick={()=>{handleclick(refe15)}}>15</div>
                            <div className="sb" id='e16' ref={refe16} onClick={()=>{handleclick(refe16)}}>16</div>
                            <div className="sb" id='e17' ref={refe17} onClick={()=>{handleclick(refe17)}}>17</div>
                            <div className="sb" id='e18' ref={refe18} onClick={()=>{handleclick(refe18)}}>18</div>
                            <div className="sb" id='e19' ref={refe19} onClick={()=>{handleclick(refe19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='e20' ref={refe20} onClick={()=>{handleclick(refe20)}}>20</div>
                            <div className="sb" id='e21' ref={refe21} onClick={()=>{handleclick(refe21)}}>21</div>
                            <div className="sb" id='e22' ref={refe22} onClick={()=>{handleclick(refe22)}}>22</div>
                            <div className="sb" id='e23' ref={refe23} onClick={()=>{handleclick(refe23)}}>23</div>
                            <div className="sb" id='e24' ref={refe24} onClick={()=>{handleclick(refe24)}}>24</div>
                            <div className="sb" id='e25' ref={refe25} onClick={()=>{handleclick(refe25)}}>25</div>
                            <div className="sb" id='e26' ref={refe26} onClick={()=>{handleclick(refe26)}}>26</div>
                    </div>


                    <div id="F">
                             <h4>F</h4>
                             <div className="sb" id='f1' ref={reff1} onClick={()=>{handleclick(reff1)}}>1</div>
                            <div className="sb" id='f2' ref={reff2} onClick={()=>{handleclick(reff2)}}>2</div>
                            <div className="sb" id='f3' ref={reff3} onClick={()=>{handleclick(reff3)}}>3</div>
                            <div className="sb" id='f4' ref={reff4} onClick={()=>{handleclick(reff4)}}>4</div>
                            <div className="sb" id='f5' ref={reff5} onClick={()=>{handleclick(reff5)}}>5</div>
                            <div className="sb" id='f6' ref={reff6} onClick={()=>{handleclick(reff6)}}>6</div>
                            <div className="sb" id='f7' ref={reff7} onClick={()=>{handleclick(reff7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='f8' ref={reff8} onClick={()=>{handleclick(reff8)}}>8</div>
                            <div className="sb" id='f9' ref={reff9} onClick={()=>{handleclick(reff9)}}>9</div>
                            <div className="sb" id='f10' ref={reff10} onClick={()=>{handleclick(reff10)}}>10</div>
                            <div className="sb" id='f11' ref={reff11} onClick={()=>{handleclick(reff11)}}>11</div>
                            <div className="sb" id='f12' ref={reff12} onClick={()=>{handleclick(reff12)}}>12</div>
                            <div className="sb" id='f13' ref={reff13} onClick={()=>{handleclick(reff13)}}>13</div>
                            <div className="sb" id='f14' ref={reff14} onClick={()=>{handleclick(reff14)}}>14</div>
                            <div className="sb" id='f15' ref={reff15} onClick={()=>{handleclick(reff15)}}>15</div>
                            <div className="sb" id='f16' ref={reff16} onClick={()=>{handleclick(reff16)}}>16</div>
                            <div className="sb" id='f17' ref={reff17} onClick={()=>{handleclick(reff17)}}>17</div>
                            <div className="sb" id='f18' ref={reff18} onClick={()=>{handleclick(reff18)}}>18</div>
                            <div className="sb" id='f19' ref={reff19} onClick={()=>{handleclick(reff19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='f20' ref={reff20} onClick={()=>{handleclick(reff20)}}>20</div>
                            <div className="sb" id='f21' ref={reff21} onClick={()=>{handleclick(reff21)}}>21</div>
                            <div className="sb" id='f22' ref={reff22} onClick={()=>{handleclick(reff22)}}>22</div>
                            <div className="sb" id='f23' ref={reff23} onClick={()=>{handleclick(reff23)}}>23</div>
                            <div className="sb" id='f24' ref={reff24} onClick={()=>{handleclick(reff24)}}>24</div>
                            <div className="sb" id='f25' ref={reff25} onClick={()=>{handleclick(reff25)}}>25</div>
                            <div className="sb" id='f26' ref={reff26} onClick={()=>{handleclick(reff26)}}>26</div>
                    </div>


                    <div id="G">
                            <h4>G</h4>
                            <div className="sb" id='g1' ref={refg1} onClick={()=>{handleclick(refg1)}}>1</div>
                            <div className="sb" id='g2' ref={refg2} onClick={()=>{handleclick(refg2)}}>2</div>
                            <div className="sb" id='g3' ref={refg3} onClick={()=>{handleclick(refg3)}}>3</div>
                            <div className="sb" id='g4' ref={refg4} onClick={()=>{handleclick(refg4)}}>4</div>
                            <div className="sb" id='g5' ref={refg5} onClick={()=>{handleclick(refg5)}}>5</div>
                            <div className="sb" id='g6' ref={refg6} onClick={()=>{handleclick(refg6)}}>6</div>
                            <div className="sb" id='g7' ref={refg7} onClick={()=>{handleclick(refg7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='g8' ref={refg8} onClick={()=>{handleclick(refg8)}}>8</div>
                            <div className="sb" id='g9' ref={refg9} onClick={()=>{handleclick(refg9)}}>9</div>
                            <div className="sb" id='g10' ref={refg10} onClick={()=>{handleclick(refg10)}}>10</div>
                            <div className="sb" id='g11' ref={refg11} onClick={()=>{handleclick(refg11)}}>11</div>
                            <div className="sb" id='g12' ref={refg12} onClick={()=>{handleclick(refg12)}}>12</div>
                            <div className="sb" id='g13' ref={refg13} onClick={()=>{handleclick(refg13)}}>13</div>
                            <div className="sb" id='g14' ref={refg14} onClick={()=>{handleclick(refg14)}}>14</div>
                            <div className="sb" id='g15' ref={refg15} onClick={()=>{handleclick(refg15)}}>15</div>
                            <div className="sb" id='g16' ref={refg16} onClick={()=>{handleclick(refg16)}}>16</div>
                            <div className="sb" id='g17' ref={refg17} onClick={()=>{handleclick(refg17)}}>17</div>
                            <div className="sb" id='g18' ref={refg18} onClick={()=>{handleclick(refg18)}}>18</div>
                            <div className="sb" id='g19' ref={refg19} onClick={()=>{handleclick(refg19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='g20' ref={refg20} onClick={()=>{handleclick(refg20)}}>20</div>
                            <div className="sb" id='g21' ref={refg21} onClick={()=>{handleclick(refg21)}}>21</div>
                            <div className="sb" id='g22' ref={refg22} onClick={()=>{handleclick(refg22)}}>22</div>
                            <div className="sb" id='g23' ref={refg23} onClick={()=>{handleclick(refg23)}}>23</div>
                            <div className="sb" id='g24' ref={refg24} onClick={()=>{handleclick(refg24)}}>24</div>
                            <div className="sb" id='g25' ref={refg25} onClick={()=>{handleclick(refg25)}}>25</div>
                            <div className="sb" id='g26' ref={refg26} onClick={()=>{handleclick(refg26)}}>26</div>
                    </div>
                   
                </div>


                <div id="gold">
                    <br />
                    <h4>GOLD Rs-110.00</h4>
                    <br />
                    <div id="H">
                            <h4>H</h4>
                            <div className="sb" id='h1' ref={refh1} onClick={()=>{handleclick(refh1)}}>1</div>
                            <div className="sb" id='h2' ref={refh2} onClick={()=>{handleclick(refh2)}}>2</div>
                            <div className="sb" id='h3' ref={refh3} onClick={()=>{handleclick(refh3)}}>3</div>
                            <div className="sb" id='h4' ref={refh4} onClick={()=>{handleclick(refh4)}}>4</div>
                            <div className="sb" id='h5' ref={refh5} onClick={()=>{handleclick(refh5)}}>5</div>
                            <div className="sb" id='h6' ref={refh6} onClick={()=>{handleclick(refh6)}}>6</div>
                            <div className="sb" id='h7' ref={refh7} onClick={()=>{handleclick(refh7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='h8' ref={refh8} onClick={()=>{handleclick(refh8)}}>8</div>
                            <div className="sb" id='h9' ref={refh9} onClick={()=>{handleclick(refh9)}}>9</div>
                            <div className="sb" id='h10' ref={refh10} onClick={()=>{handleclick(refh10)}}>10</div>
                            <div className="sb" id='h11' ref={refh11} onClick={()=>{handleclick(refh11)}}>11</div>
                            <div className="sb" id='h12' ref={refh12} onClick={()=>{handleclick(refh12)}}>12</div>
                            <div className="sb" id='h13' ref={refh13} onClick={()=>{handleclick(refh13)}}>13</div>
                            <div className="sb" id='h14' ref={refh14} onClick={()=>{handleclick(refh14)}}>14</div>
                            <div className="sb" id='h15' ref={refh15} onClick={()=>{handleclick(refh15)}}>15</div>
                            <div className="sb" id='h16' ref={refh16} onClick={()=>{handleclick(refh16)}}>16</div>
                            <div className="sb" id='h17' ref={refh17} onClick={()=>{handleclick(refh17)}}>17</div>
                            <div className="sb" id='h18' ref={refh18} onClick={()=>{handleclick(refh18)}}>18</div>
                            <div className="sb" id='h19' ref={refh19} onClick={()=>{handleclick(refh19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='h20' ref={refh20} onClick={()=>{handleclick(refh20)}}>20</div>
                            <div className="sb" id='h21' ref={refh21} onClick={()=>{handleclick(refh21)}}>21</div>
                            <div className="sb" id='h22' ref={refh22} onClick={()=>{handleclick(refh22)}}>22</div>
                            <div className="sb" id='h23' ref={refh23} onClick={()=>{handleclick(refh23)}}>23</div>
                            <div className="sb" id='h24' ref={refh24} onClick={()=>{handleclick(refh24)}}>24</div>
                            <div className="sb" id='h25' ref={refh25} onClick={()=>{handleclick(refh25)}}>25</div>
                            <div className="sb" id='h26' ref={refh26} onClick={()=>{handleclick(refh26)}}>26</div>
                    </div>

                    <div id="I">
                            <h4>I</h4>
                            <div className="sb" id='i1' ref={refi1} onClick={()=>{handleclick(refi1)}}>1</div>
                            <div className="sb" id='i2' ref={refi2} onClick={()=>{handleclick(refi2)}}>2</div>
                            <div className="sb" id='i3' ref={refi3} onClick={()=>{handleclick(refi3)}}>3</div>
                            <div className="sb" id='i4' ref={refi4} onClick={()=>{handleclick(refi4)}}>4</div>
                            <div className="sb" id='i5' ref={refi5} onClick={()=>{handleclick(refi5)}}>5</div>
                            <div className="sb" id='i6' ref={refi6} onClick={()=>{handleclick(refi6)}}>6</div>
                            <div className="sb" id='i7' ref={refi7} onClick={()=>{handleclick(refi7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='i8' ref={refi8} onClick={()=>{handleclick(refi8)}}>8</div>
                            <div className="sb" id='i9' ref={refi9} onClick={()=>{handleclick(refi9)}}>9</div>
                            <div className="sb" id='i10' ref={refi10} onClick={()=>{handleclick(refi10)}}>10</div>
                            <div className="sb" id='i11' ref={refi11} onClick={()=>{handleclick(refi11)}}>11</div>
                            <div className="sb" id='i12' ref={refi12} onClick={()=>{handleclick(refi12)}}>12</div>
                            <div className="sb" id='i13' ref={refi13} onClick={()=>{handleclick(refi13)}}>13</div>
                            <div className="sb" id='i14' ref={refi14} onClick={()=>{handleclick(refi14)}}>14</div>
                            <div className="sb" id='i15' ref={refi15} onClick={()=>{handleclick(refi15)}}>15</div>
                            <div className="sb" id='i16' ref={refi16} onClick={()=>{handleclick(refi16)}}>16</div>
                            <div className="sb" id='i17' ref={refi17} onClick={()=>{handleclick(refi17)}}>17</div>
                            <div className="sb" id='i18' ref={refi18} onClick={()=>{handleclick(refi18)}}>18</div>
                            <div className="sb" id='i19' ref={refi19} onClick={()=>{handleclick(refi19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='i20' ref={refi20} onClick={()=>{handleclick(refi20)}}>20</div>
                            <div className="sb" id='i21' ref={refi21} onClick={()=>{handleclick(refi21)}}>21</div>
                            <div className="sb" id='i22' ref={refi22} onClick={()=>{handleclick(refi22)}}>22</div>
                            <div className="sb" id='i23' ref={refi23} onClick={()=>{handleclick(refi23)}}>23</div>
                            <div className="sb" id='i24' ref={refi24} onClick={()=>{handleclick(refi24)}}>24</div>
                            <div className="sb" id='i25' ref={refi25} onClick={()=>{handleclick(refi25)}}>25</div>
                            <div className="sb" id='i26' ref={refi26} onClick={()=>{handleclick(refi26)}}>26</div>
                    </div>

                    <div id="J">
                            <h4>J</h4>
                            <div className="sb" id='j1' ref={refj1} onClick={()=>{handleclick(refj1)}}>1</div>
                            <div className="sb" id='j2' ref={refj2} onClick={()=>{handleclick(refj2)}}>2</div>
                            <div className="sb" id='j3' ref={refj3} onClick={()=>{handleclick(refj3)}}>3</div>
                            <div className="sb" id='j4' ref={refj4} onClick={()=>{handleclick(refj4)}}>4</div>
                            <div className="sb" id='j5' ref={refj5} onClick={()=>{handleclick(refj5)}}>5</div>
                            <div className="sb" id='j6' ref={refj6} onClick={()=>{handleclick(refj6)}}>6</div>
                            <div className="sb" id='j7' ref={refj7} onClick={()=>{handleclick(refj7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='j8' ref={refj8} onClick={()=>{handleclick(refj8)}}>8</div>
                            <div className="sb" id='j9' ref={refj9} onClick={()=>{handleclick(refj9)}}>9</div>
                            <div className="sb" id='j10' ref={refj10} onClick={()=>{handleclick(refj10)}}>10</div>
                            <div className="sb" id='j11' ref={refj11} onClick={()=>{handleclick(refj11)}}>11</div>
                            <div className="sb" id='j12' ref={refj12} onClick={()=>{handleclick(refj12)}}>12</div>
                            <div className="sb" id='j13' ref={refj13} onClick={()=>{handleclick(refj13)}}>13</div>
                            <div className="sb" id='j14' ref={refj14} onClick={()=>{handleclick(refj14)}}>14</div>
                            <div className="sb" id='j15' ref={refj15} onClick={()=>{handleclick(refj15)}}>15</div>
                            <div className="sb" id='j16' ref={refj16} onClick={()=>{handleclick(refj16)}}>16</div>
                            <div className="sb" id='j17' ref={refj17} onClick={()=>{handleclick(refj17)}}>17</div>
                            <div className="sb" id='j18' ref={refj18} onClick={()=>{handleclick(refj18)}}>18</div>
                            <div className="sb" id='j19' ref={refj19} onClick={()=>{handleclick(refj19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='j20' ref={refj20} onClick={()=>{handleclick(refj20)}}>20</div>
                            <div className="sb" id='j21' ref={refj21} onClick={()=>{handleclick(refj21)}}>21</div>
                            <div className="sb" id='j22' ref={refj22} onClick={()=>{handleclick(refj22)}}>22</div>
                            <div className="sb" id='j23' ref={refj23} onClick={()=>{handleclick(refj23)}}>23</div>
                            <div className="sb" id='j24' ref={refj24} onClick={()=>{handleclick(refj24)}}>24</div>
                            <div className="sb" id='j25' ref={refj25} onClick={()=>{handleclick(refj25)}}>25</div>
                            <div className="sb" id='j26' ref={refj26} onClick={()=>{handleclick(refj26)}}>26</div>
                    </div>

                    <div id="K">
                            <h4>K</h4>
                            <div className="sb" id='k1' ref={refk1} onClick={()=>{handleclick(refk1)}}>1</div>
                            <div className="sb" id='k2' ref={refk2} onClick={()=>{handleclick(refk2)}}>2</div>
                            <div className="sb" id='k3' ref={refk3} onClick={()=>{handleclick(refk3)}}>3</div>
                            <div className="sb" id='k4' ref={refk4} onClick={()=>{handleclick(refk4)}}>4</div>
                            <div className="sb" id='k5' ref={refk5} onClick={()=>{handleclick(refk5)}}>5</div>
                            <div className="sb" id='k6' ref={refk6} onClick={()=>{handleclick(refk6)}}>6</div>
                            <div className="sb" id='k7' ref={refk7} onClick={()=>{handleclick(refk7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='k8' ref={refk8} onClick={()=>{handleclick(refk8)}}>8</div>
                            <div className="sb" id='k9' ref={refk9} onClick={()=>{handleclick(refk9)}}>9</div>
                            <div className="sb" id='k10' ref={refk10} onClick={()=>{handleclick(refk10)}}>10</div>
                            <div className="sb" id='k11' ref={refk11} onClick={()=>{handleclick(refk11)}}>11</div>
                            <div className="sb" id='k12' ref={refk12} onClick={()=>{handleclick(refk12)}}>12</div>
                            <div className="sb" id='k13' ref={refk13} onClick={()=>{handleclick(refk13)}}>13</div>
                            <div className="sb" id='k14' ref={refk14} onClick={()=>{handleclick(refk14)}}>14</div>
                            <div className="sb" id='k15' ref={refk15} onClick={()=>{handleclick(refk15)}}>15</div>
                            <div className="sb" id='k16' ref={refk16} onClick={()=>{handleclick(refk16)}}>16</div>
                            <div className="sb" id='k17' ref={refk17} onClick={()=>{handleclick(refk17)}}>17</div>
                            <div className="sb" id='k18' ref={refk18} onClick={()=>{handleclick(refk18)}}>18</div>
                            <div className="sb" id='k19' ref={refk19} onClick={()=>{handleclick(refk19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='k20' ref={refk20} onClick={()=>{handleclick(refk20)}}>20</div>
                            <div className="sb" id='k21' ref={refk21} onClick={()=>{handleclick(refk21)}}>21</div>
                            <div className="sb" id='k22' ref={refk22} onClick={()=>{handleclick(refk22)}}>22</div>
                            <div className="sb" id='k23' ref={refk23} onClick={()=>{handleclick(refk23)}}>23</div>
                            <div className="sb" id='k24' ref={refk24} onClick={()=>{handleclick(refk24)}}>24</div>
                            <div className="sb" id='k25' ref={refk25} onClick={()=>{handleclick(refk25)}}>25</div>
                            <div className="sb" id='k26' ref={refk26} onClick={()=>{handleclick(refk26)}}>26</div>
                    </div>

                    <div id="L">
                            <h4>L</h4>
                            <div className="sb" id='l1' ref={refl1} onClick={()=>{handleclick(refl1)}}>1</div>
                            <div className="sb" id='l2' ref={refl2} onClick={()=>{handleclick(refl2)}}>2</div>
                            <div className="sb" id='l3' ref={refl3} onClick={()=>{handleclick(refl3)}}>3</div>
                            <div className="sb" id='l4' ref={refl4} onClick={()=>{handleclick(refl4)}}>4</div>
                            <div className="sb" id='l5' ref={refl5} onClick={()=>{handleclick(refl5)}}>5</div>
                            <div className="sb" id='l6' ref={refl6} onClick={()=>{handleclick(refl6)}}>6</div>
                            <div className="sb" id='l7' ref={refl7} onClick={()=>{handleclick(refl7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='l8' ref={refl8} onClick={()=>{handleclick(refl8)}}>8</div>
                            <div className="sb" id='l9' ref={refl9} onClick={()=>{handleclick(refl9)}}>9</div>
                            <div className="sb" id='l10' ref={refl10} onClick={()=>{handleclick(refl10)}}>10</div>
                            <div className="sb" id='l11' ref={refl11} onClick={()=>{handleclick(refl11)}}>11</div>
                            <div className="sb" id='l12' ref={refl12} onClick={()=>{handleclick(refl12)}}>12</div>
                            <div className="sb" id='l13' ref={refl13} onClick={()=>{handleclick(refl13)}}>13</div>
                            <div className="sb" id='l14' ref={refl14} onClick={()=>{handleclick(refl14)}}>14</div>
                            <div className="sb" id='l15' ref={refl15} onClick={()=>{handleclick(refl15)}}>15</div>
                            <div className="sb" id='l16' ref={refl16} onClick={()=>{handleclick(refl16)}}>16</div>
                            <div className="sb" id='l17' ref={refl17} onClick={()=>{handleclick(refl17)}}>17</div>
                            <div className="sb" id='l18' ref={refl18} onClick={()=>{handleclick(refl18)}}>18</div>
                            <div className="sb" id='l19' ref={refl19} onClick={()=>{handleclick(refl19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='l20' ref={refl20} onClick={()=>{handleclick(refl20)}}>20</div>
                            <div className="sb" id='l21' ref={refl21} onClick={()=>{handleclick(refl21)}}>21</div>
                            <div className="sb" id='l22' ref={refl22} onClick={()=>{handleclick(refl22)}}>22</div>
                            <div className="sb" id='l23' ref={refl23} onClick={()=>{handleclick(refl23)}}>23</div>
                            <div className="sb" id='l24' ref={refl24} onClick={()=>{handleclick(refl24)}}>24</div>
                            <div className="sb" id='l25' ref={refl25} onClick={()=>{handleclick(refl25)}}>25</div>
                            <div className="sb" id='l26' ref={refl26} onClick={()=>{handleclick(refl26)}}>26</div>
                    </div>

                    <div id="M">
                            <h4>M</h4>
                            <div className="sb" id='m1' ref={refm1} onClick={()=>{handleclick(refm1)}}>1</div>
                            <div className="sb" id='m2' ref={refm2} onClick={()=>{handleclick(refm2)}}>2</div>
                            <div className="sb" id='m3' ref={refm3} onClick={()=>{handleclick(refm3)}}>3</div>
                            <div className="sb" id='m4' ref={refm4} onClick={()=>{handleclick(refm4)}}>4</div>
                            <div className="sb" id='m5' ref={refm5} onClick={()=>{handleclick(refm5)}}>5</div>
                            <div className="sb" id='m6' ref={refm6} onClick={()=>{handleclick(refm6)}}>6</div>
                            <div className="sb" id='m7' ref={refm7} onClick={()=>{handleclick(refm7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='m8' ref={refm8} onClick={()=>{handleclick(refm8)}}>8</div>
                            <div className="sb" id='m9' ref={refm9} onClick={()=>{handleclick(refm9)}}>9</div>
                            <div className="sb" id='m10' ref={refm10} onClick={()=>{handleclick(refm10)}}>10</div>
                            <div className="sb" id='m11' ref={refm11} onClick={()=>{handleclick(refm11)}}>11</div>
                            <div className="sb" id='m12' ref={refm12} onClick={()=>{handleclick(refm12)}}>12</div>
                            <div className="sb" id='m13' ref={refm13} onClick={()=>{handleclick(refm13)}}>13</div>
                            <div className="sb" id='m14' ref={refm14} onClick={()=>{handleclick(refm14)}}>14</div>
                            <div className="sb" id='m15' ref={refm15} onClick={()=>{handleclick(refm15)}}>15</div>
                            <div className="sb" id='m16' ref={refm16} onClick={()=>{handleclick(refm16)}}>16</div>
                            <div className="sb" id='m17' ref={refm17} onClick={()=>{handleclick(refm17)}}>17</div>
                            <div className="sb" id='m18' ref={refm18} onClick={()=>{handleclick(refm18)}}>18</div>
                            <div className="sb" id='m19' ref={refm19} onClick={()=>{handleclick(refm19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='m20' ref={refm20} onClick={()=>{handleclick(refm20)}}>20</div>
                            <div className="sb" id='m21' ref={refm21} onClick={()=>{handleclick(refm21)}}>21</div>
                            <div className="sb" id='m22' ref={refm22} onClick={()=>{handleclick(refm22)}}>22</div>
                            <div className="sb" id='m23' ref={refm23} onClick={()=>{handleclick(refm23)}}>23</div>
                            <div className="sb" id='m24' ref={refm24} onClick={()=>{handleclick(refm24)}}>24</div>
                            <div className="sb" id='m25' ref={refm25} onClick={()=>{handleclick(refm25)}}>25</div>
                            <div className="sb" id='m26' ref={refm26} onClick={()=>{handleclick(refm26)}}>26</div>
                    </div>

                    <div id="N">
                            <h4>N</h4>
                            <div className="sb" id='n1' ref={refn1} onClick={()=>{handleclick(refn1)}}>1</div>
                            <div className="sb" id='n2' ref={refn2} onClick={()=>{handleclick(refn2)}}>2</div>
                            <div className="sb" id='n3' ref={refn3} onClick={()=>{handleclick(refn3)}}>3</div>
                            <div className="sb" id='n4' ref={refn4} onClick={()=>{handleclick(refn4)}}>4</div>
                            <div className="sb" id='n5' ref={refn5} onClick={()=>{handleclick(refn5)}}>5</div>
                            <div className="sb" id='n6' ref={refn6} onClick={()=>{handleclick(refn6)}}>6</div>
                            <div className="sb" id='n7' ref={refn7} onClick={()=>{handleclick(refn7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='n8' ref={refn8} onClick={()=>{handleclick(refn8)}}>8</div>
                            <div className="sb" id='n9' ref={refn9} onClick={()=>{handleclick(refn9)}}>9</div>
                            <div className="sb" id='n10' ref={refn10} onClick={()=>{handleclick(refn10)}}>10</div>
                            <div className="sb" id='n11' ref={refn11} onClick={()=>{handleclick(refn11)}}>11</div>
                            <div className="sb" id='n12' ref={refn12} onClick={()=>{handleclick(refn12)}}>12</div>
                            <div className="sb" id='n13' ref={refn13} onClick={()=>{handleclick(refn13)}}>13</div>
                            <div className="sb" id='n14' ref={refn14} onClick={()=>{handleclick(refn14)}}>14</div>
                            <div className="sb" id='n15' ref={refn15} onClick={()=>{handleclick(refn15)}}>15</div>
                            <div className="sb" id='n16' ref={refn16} onClick={()=>{handleclick(refn16)}}>16</div>
                            <div className="sb" id='n17' ref={refn17} onClick={()=>{handleclick(refn17)}}>17</div>
                            <div className="sb" id='n18' ref={refn18} onClick={()=>{handleclick(refn18)}}>18</div>
                            <div className="sb" id='n19' ref={refn19} onClick={()=>{handleclick(refn19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='n20' ref={refn20} onClick={()=>{handleclick(refn20)}}>20</div>
                            <div className="sb" id='n21' ref={refn21} onClick={()=>{handleclick(refn21)}}>21</div>
                            <div className="sb" id='n22' ref={refn22} onClick={()=>{handleclick(refn22)}}>22</div>
                            <div className="sb" id='n23' ref={refn23} onClick={()=>{handleclick(refn23)}}>23</div>
                            <div className="sb" id='n24' ref={refn24} onClick={()=>{handleclick(refn24)}}>24</div>
                            <div className="sb" id='n25' ref={refn25} onClick={()=>{handleclick(refn25)}}>25</div>
                            <div className="sb" id='n26' ref={refn26} onClick={()=>{handleclick(refn26)}}>26</div>
                    </div>

                    <div id="O">
                            <h4>O</h4>
                            <div className="sb" id='o1' ref={refo1} onClick={()=>{handleclick(refo1)}}>1</div>
                            <div className="sb" id='o2' ref={refo2} onClick={()=>{handleclick(refo2)}}>2</div>
                            <div className="sb" id='o3' ref={refo3} onClick={()=>{handleclick(refo3)}}>3</div>
                            <div className="sb" id='o4' ref={refo4} onClick={()=>{handleclick(refo4)}}>4</div>
                            <div className="sb" id='o5' ref={refo5} onClick={()=>{handleclick(refo5)}}>5</div>
                            <div className="sb" id='o6' ref={refo6} onClick={()=>{handleclick(refo6)}}>6</div>
                            <div className="sb" id='o7' ref={refo7} onClick={()=>{handleclick(refo7)}}>7</div>
                            <div className="gapp"></div>
                            <div className="sb" id='o8' ref={refo8} onClick={()=>{handleclick(refo8)}}>8</div>
                            <div className="sb" id='o9' ref={refo9} onClick={()=>{handleclick(refo9)}}>9</div>
                            <div className="sb" id='o10' ref={refo10} onClick={()=>{handleclick(refo10)}}>10</div>
                            <div className="sb" id='o11' ref={refo11} onClick={()=>{handleclick(refo11)}}>11</div>
                            <div className="sb" id='o12' ref={refo12} onClick={()=>{handleclick(refo12)}}>12</div>
                            <div className="sb" id='o13' ref={refo13} onClick={()=>{handleclick(refo13)}}>13</div>
                            <div className="sb" id='o14' ref={refo14} onClick={()=>{handleclick(refo14)}}>14</div>
                            <div className="sb" id='o15' ref={refo15} onClick={()=>{handleclick(refo15)}}>15</div>
                            <div className="sb" id='o16' ref={refo16} onClick={()=>{handleclick(refo16)}}>16</div>
                            <div className="sb" id='o17' ref={refo17} onClick={()=>{handleclick(refo17)}}>17</div>
                            <div className="sb" id='o18' ref={refo18} onClick={()=>{handleclick(refo18)}}>18</div>
                            <div className="sb" id='o19' ref={refo19} onClick={()=>{handleclick(refo19)}}>19</div>
                            <div className="gapp"></div>
                            <div className="sb" id='o20' ref={refo20} onClick={()=>{handleclick(refo20)}}>20</div>
                            <div className="sb" id='o21' ref={refo21} onClick={()=>{handleclick(refo21)}}>21</div>
                            <div className="sb" id='o22' ref={refo22} onClick={()=>{handleclick(refo22)}}>22</div>
                            <div className="sb" id='o23' ref={refo23} onClick={()=>{handleclick(refo23)}}>23</div>
                            <div className="sb" id='o24' ref={refo24} onClick={()=>{handleclick(refo24)}}>24</div>
                            <div className="sb" id='o25' ref={refo25} onClick={()=>{handleclick(refo25)}}>25</div>
                            <div className="sb" id='o26' ref={refo26} onClick={()=>{handleclick(refo26)}}>26</div>
                    </div>

                </div>


                <div id="silver">
                    <br />
                    <h4>SILVER Rs-110.00</h4>
                    <br />
                    <div id="P">
                            <h4>P</h4>
                            <div className="gapp"></div>
                            <div className="sb" id='p1' ref={refp1} onClick={()=>{handleclick(refp1)}}>1</div>
                            <div className="sb" id='p2' ref={refp2} onClick={()=>{handleclick(refp2)}}>2</div>
                            <div className="sb" id='p3' ref={refp3} onClick={()=>{handleclick(refp3)}}>3</div>
                            <div className="gapp"></div>
                            <div className="gapp"></div>
                            <div className="sb" id='p4' ref={refp4} onClick={()=>{handleclick(refp4)}}>4</div>
                            <div className="sb" id='p5' ref={refp5} onClick={()=>{handleclick(refp5)}}>5</div>
                            <div className="sb" id='p6' ref={refp6} onClick={()=>{handleclick(refp6)}}>6</div>
                            <div className="sb" id='p7' ref={refp7} onClick={()=>{handleclick(refp7)}}>7</div>
                            <div className="sb" id='p8' ref={refp8} onClick={()=>{handleclick(refp8)}}>8</div>
                            <div className="sb" id='p9' ref={refp9} onClick={()=>{handleclick(refp9)}}>9</div>
                            <div className="sb" id='p10' ref={refp10} onClick={()=>{handleclick(refp10)}}>10</div>
                            <div className="sb" id='p11' ref={refp11} onClick={()=>{handleclick(refp11)}}>11</div>
                            <div className="sb" id='p12' ref={refp12} onClick={()=>{handleclick(refp12)}}>12</div>
                            <div className="sb" id='p13' ref={refp13} onClick={()=>{handleclick(refp13)}}>13</div>
                            <div className="sb" id='p14' ref={refp14} onClick={()=>{handleclick(refp14)}}>14</div>
                            <div className="sb" id='p15' ref={refp15} onClick={()=>{handleclick(refp15)}}>15</div>
                            <div className="gapp"></div>
                            <div className="gapp"></div>
                            <div className="sb" id='p16' ref={refp16} onClick={()=>{handleclick(refp16)}}>16</div>
                            <div className="sb" id='p17' ref={refp17} onClick={()=>{handleclick(refp17)}}>17</div>
                            
                    </div>
                    <div id="Q">
                            <h4>Q</h4>
                            <div className="gapp"></div>
                            <div className="sb" id='q1' ref={refq1} onClick={()=>{handleclick(refq1)}}>1</div>
                            <div className="sb" id='q2' ref={refq2} onClick={()=>{handleclick(refq2)}}>2</div>
                            <div className="sb" id='q3' ref={refq3} onClick={()=>{handleclick(refq3)}}>3</div>
                            <div className="gapp"></div>
                            <div className="gapp"></div>
                            <div className="sb" id='q4' ref={refq4} onClick={()=>{handleclick(refq4)}}>4</div>
                            <div className="sb" id='q5' ref={refq5} onClick={()=>{handleclick(refq5)}}>5</div>
                            <div className="sb" id='q6' ref={refq6} onClick={()=>{handleclick(refq6)}}>6</div>
                            <div className="sb" id='q7' ref={refq7} onClick={()=>{handleclick(refq7)}}>7</div>
                            <div className="sb" id='q8' ref={refq8} onClick={()=>{handleclick(refq8)}}>8</div>
                            <div className="sb" id='q9' ref={refq9} onClick={()=>{handleclick(refq9)}}>9</div>
                            <div className="sb" id='q10' ref={refq10} onClick={()=>{handleclick(refq10)}}>10</div>
                            <div className="sb" id='q11' ref={refq11} onClick={()=>{handleclick(refq11)}}>11</div>
                            <div className="sb" id='q12' ref={refq12} onClick={()=>{handleclick(refq12)}}>12</div>
                            <div className="sb" id='q13' ref={refq13} onClick={()=>{handleclick(refq13)}}>13</div>
                            <div className="sb" id='q14' ref={refq14} onClick={()=>{handleclick(refq14)}}>14</div>
                            <div className="sb" id='q15' ref={refq15} onClick={()=>{handleclick(refq15)}}>15</div>
                            <div className="gapp"></div>
                            <div className="gapp"></div>
                            <div className="sb" id='q16' ref={refq16} onClick={()=>{handleclick(refq16)}}>16</div>
                            <div className="sb" id='q17' ref={refq17} onClick={()=>{handleclick(refq17)}}>17</div>
                            
                    </div>
                    <div id="R">
                            <h4>R</h4>
                            <div className="gapp"></div>
                            <div className="sb" id='r1' ref={refr1} onClick={()=>{handleclick(refr1)}}>1</div>
                            <div className="sb" id='r2' ref={refr2} onClick={()=>{handleclick(refr2)}}>2</div>
                            <div className="sb" id='r3' ref={refr3} onClick={()=>{handleclick(refr3)}}>3</div>
                            <div className="gapp"></div>
                            <div className="gapp"></div>
                            <div className="sb" id='r4' ref={refr4} onClick={()=>{handleclick(refr4)}}>4</div>
                            <div className="sb" id='r5' ref={refr5} onClick={()=>{handleclick(refr5)}}>5</div>
                            <div className="sb" id='r6' ref={refr6} onClick={()=>{handleclick(refr6)}}>6</div>
                            <div className="sb" id='r7' ref={refr7} onClick={()=>{handleclick(refr7)}}>7</div>
                            <div className="sb" id='r8' ref={refr8} onClick={()=>{handleclick(refr8)}}>8</div>
                            <div className="sb" id='r9' ref={refr9} onClick={()=>{handleclick(refr9)}}>9</div>
                            <div className="sb" id='r10' ref={refr10} onClick={()=>{handleclick(refr10)}}>10</div>
                            <div className="sb" id='r11' ref={refr11} onClick={()=>{handleclick(refr11)}}>11</div>
                            <div className="sb" id='r12' ref={refr12} onClick={()=>{handleclick(refr12)}}>12</div>
                            <div className="sb" id='r13' ref={refr13} onClick={()=>{handleclick(refr13)}}>13</div>
                            <div className="sb" id='r14' ref={refr14} onClick={()=>{handleclick(refr14)}}>14</div>
                            <div className="sb" id='r15' ref={refr15} onClick={()=>{handleclick(refr15)}}>15</div>
                            <div className="gapp"></div>
                            <div className="gapp"></div>
                            <div className="sb" id='r16' ref={refr16} onClick={()=>{handleclick(refr16)}}>16</div>
                            <div className="sb" id='r17' ref={refr17} onClick={()=>{handleclick(refr17)}}>17</div>
                            
                    </div>

                </div>


                </div>
                        <button className={but?"paybut":"gayab"} onClick={makeorder}>Pay Rs 11</button>
                <Bottom></Bottom>
        </div>
    )
}

export default Seat;