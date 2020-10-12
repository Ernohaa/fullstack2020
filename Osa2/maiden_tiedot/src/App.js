import React, {useState,useEffect} from 'react';
import axios from 'axios'

//todo säätiedot ja nappi mistä suoraan maan näkymään

const MaaLista=({maat,haeMaa})=>{

  const naytettavatMaat = maat.filter(
    maat => maat.name.toLowerCase().includes(haeMaa.toLowerCase())
  )

   if(naytettavatMaat.length===1){
     console.log(naytettavatMaat[0])
     return(
       <div>
       <h1>{naytettavatMaat[0].name}</h1>
       <p>capital: {naytettavatMaat[0].capital}</p>
       <p>population: {naytettavatMaat[0].population}</p>
       <p>languages</p>
       {naytettavatMaat[0]
       .languages
       .map(
         kieli=>
         <li key={kieli.name}>{kieli.name}</li>
       )}
       
       <img src={naytettavatMaat[0].flag} alt={"lippu"} width={100} ></img>
       </div>
     )           
   } 


  if (naytettavatMaat.length<=10){
      return(
        naytettavatMaat
        .map(
          maa=>
          <li key={maa.name}>{maa.name}</li>
        )
      )

  } else {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
}

const App=()=>{
  
  const [maat,setMaat] =useState([])
  const [haeMaa,setHaettuMaa]= useState('')
  
  useEffect(()=>{
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(vastaus=>{
      setMaat(vastaus.data)
    })
  },[])

  const handleSearchChange = (event)=>{
    console.log(event.target.value);  
    setHaettuMaa(event.target.value)
  }
 

  return(
    <div>
      <form>
        Find countries:
        <input value={haeMaa} onChange={handleSearchChange} ></input>
      </form>
      <div>
      <MaaLista maat={maat} haeMaa={haeMaa}/>
      </div>
    </div>
  )

}
export default App;
