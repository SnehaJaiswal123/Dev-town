export default function Producs(props){
    
    return(
        <div className="main" style={{display:"flex", flexDirection:"column", border:"2px solid black",margin:"20px 20px",padding:"20px 20px"}}>
            <div><img style={{width:"200px",height:"200px"}} src={props.img} alt="image" /></div>
            <div>{props.price}</div>
            <div>{props.title}</div>
            <div>{props.desc}</div>
        </div>
       
    )
    
}