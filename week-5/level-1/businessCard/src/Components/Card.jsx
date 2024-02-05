import { useState } from 'react'
import '../index.css'
export function Card(){
    const [name , setName] = useState("")
    const[description, setDescription] = useState("")
    const[int1, setInt1] = useState("")
    const[int2, setInt2] = useState("")
    const[int3, setInt3] = useState("")
    const[linkedin, setLinkedin] = useState("")
    const [twitter , setTwitter] = useState("")

    return (
        <div className="centeredDiv">
            <input type='text' placeholder='name' onChange={function(e){
                const value = e.target.value;
                setName(value);
            }}/> <br/>
            <input type='text' placeholder='description' onChange={function(e){
                const value = e.target.value;
                setDescription(value);
            }}/><br/>
            <h2>Interests</h2><br/>
            <input type='text' placeholder='interest1' onChange={function(e){
                const value = e.target.value;
                setInt1(value);
            }}/><br/>
            <input type='text' placeholder='interest2'onChange={function(e){
                const value = e.target.value;
                setInt2(value);
            }}/><br/>
            <input type='text' placeholder='interest3'onChange={function(e){
                const value = e.target.value;
                setInt3(value);
            }}/><br/>
            <input type='text' placeholder='linkedinURL'onChange={function(e){
                const value = e.target.value;
                setLinkedin(value);
            }}/><br/>
            <input type='text' placeholder='twitterURL' onChange={function(e){
                const value = e.target.value;
                setTwitter(value);
            }}/><br/>
            <button onClick={function(){
                fetch('http://localhost:3000/createCard',{
                    method:"POST",
                    body:JSON.stringify({
                        name:name,
                        description:description,
                        int1:int1,
                        int2:int2,
                        int3:int3,
                        linkedin:linkedin,
                        twitter:twitter,
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
            }}>Create Card</button>
            {/* <button style={{
                padding:10,
                marginRight:15,
                backgroundColor:"lightblue",
                color:"white",
                borderRadius:5,
                fontSize:20,
                fontWeight:"bold"
            }}>LinkedIn</button>
            <button style={{
                padding:10,
                marginRight:15,
                backgroundColor:"lightblue",
                color:"white",
                borderRadius:5,
                fontSize:20,
                fontWeight:"bold"
            }}>Twitter</button> */}

        </div>
    )
}