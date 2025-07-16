

function IfDemo(){
    const isLoggedIn=true
    const cart=["laptop","mouse","byke"]


    return(
        <>
        <h2>If Else Statement with Ternary Operation </h2>
        <p>
            User :{isLoggedIn ?"User enter into Home Page":"Login Denaied..."}
        </p>
        <p>
            Cart Items:{cart.length>0?`Items :${cart.length}`:
            <p style={{color:"red"}}> cart is Empty</p>}
        </p>
    
        
        </>
    )
}
export default IfDemo