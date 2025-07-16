const students=[
    {id:1,name:"sathya",rank:1},
    {id:2,name:"suresh",rank:2},
    {id:3,name:"keerthi",rank:1},
    {id:4,name:"soma",rank:4},
    {id:5,name:"prakash",rank:3},
]

function ArrayDemo(){
return(
    <div>
        <h2>Welcome to Student List</h2>
        {students.length===0?(<p>No student found</p>):(
            <ul>
                {students.map((student)=>(
                    <li key={student.id}>
                        <strong>
                            Name:{student.name}
                           -Rank : {student.name}-{student.rank===1?(<span>Topper</span>)
                            :(<span>Keep Trying</span>)}
                        </strong>
                    </li>
                ))}
            </ul>
        )}
    </div>
)

}
export default ArrayDemo