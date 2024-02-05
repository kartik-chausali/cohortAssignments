/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
export function GetCards({cards}){
return <div>
    {
    cards.map(function (card){
        return (
            <div>
                <h1>{card.name}</h1>
                <p>{card.description}</p>
                <h1>Interests</h1>
                <p>{card.int1}</p>
                <p>{card.int2}</p>
                <p>{card.int3}</p>
                <button onClick={
                    function(){
                        window.location.href = card.linkedinURL
                    }
                } >LinkedIn</button>
                <button onClick={
                    function(){
                        window.location.href = card.twitterURL
                    }
                }>Twitter</button>

            </div>
        )
    })
}
    </div>
}