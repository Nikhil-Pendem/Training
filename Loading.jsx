

function Loading(){

    const status="loading"
    let content;
    if(status==="loading")
    {
        content=<p style={{color:'blue'}}>Data is Loading....</p>
    }
    else if(status==="error")
    {
        content=<p style={{color:'red'}}>Data is Not featched...505 Error</p>
    }
    else{
        content=<p style={{color:'green'}}>Data featched Successfully...</p>
    }

return (
    <div>
       <h2>::::Data Retriving From server::::</h2> {content}
    </div>
)
}
export default Loading