

function ShortCircuit(){

    const isAdmin=true
    const score=75

    return(
        <div>
            <h2>Short Circuit Rendering</h2>
            <p>
                {isAdmin && <button>Delete User</button>}

            </p>
            <p>Score:{score}</p>
            {score>90 && <span>Bonus is Unlocked</span>}
        </div>
    )
}
export default ShortCircuit