import React,{useEffect, useState} from 'react'
import YourBotArmy from './YourBotArmy';

function BotCollection() {
const [bot ,setBot] = useState([])
const [botArray ,setBotArray] =useState([])

function handleAdd(selectBot){
 if(!botArray.find(bot => bot.id === selectBot.id)){
   setBotArray([...botArray,selectBot])
   alert("reporting to duty ")
 }else{
    alert("U have already selected me")
 }


}
  useEffect(()=>{
        fetch(" https://botis.onrender.com/bots")
        .then(response => response.json())
        .then(data => setBot(data))
    },[])

    const botDisplay = bot.map((detail)=>
        (
      
         <div key={detail.id} style={{textAlign:'center',backgroundColor:"violet"}}>
     <p>Name:{detail.name}</p>
     <p>Health:{detail.health}</p>
     <p>Damage:{detail.damage}</p>
     <p>Armor:{detail.armor}</p>
     <p>Bot Class:{detail.bot_class}</p>
      <img src={detail.avatar_url} alt="try again" />
      
      <button onClick={()=>handleAdd(detail)} >Add to Army</button>
     </div>



))

  return (
  <>
    <h1 >BOT  COLLECTION</h1>
        {botDisplay}
<YourBotArmy botArray={botArray} setBotArray={setBotArray}/>
       
         </>
  )
   }


    
    

export default BotCollection