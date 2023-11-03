export default function Producs(props){
    
    return(
        <div className="main" style={{display:"flex",height:"400px",width:'300px', flexDirection:"column",margin:"20px 20px",padding:"20px 20px",backgroundColor:'whitesmoke',justifyContent:'center',alignItems:'center'}}>
            <div><img style={{width:"200px",height:"200px"}} src={props.img} alt="image" /></div>
            <div style={{color:'black',fontFamily:'inherit',fontWeight:'initial'}}>{props.desc}</div>
            <div >{props.price}</div>
            {/* <div>{props.title}</div> */}
            
        </div>
       
    )
    
}