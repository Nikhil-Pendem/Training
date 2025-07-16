

function SwitchDemo(){

    const status="pending"
    let content;
   
    switch(status){
        case 'success':
            content='Data Fetched Successfully...';
            break;
        case 'error':
            content='505 Error is occurred...';
            break;
        case 'pending':
            content='Data is Pending...';
            break;
        default:
            content='Unknown Error';
    }
    return(
        <div>{content}</div>
    )
}
export default SwitchDemo