function Nav(){
    return(
        <>
    

        <div style={{boxShadow:" 1px 1px 8px gray",width:"960px",height:"62px",display:"flex" ,gap:"70px",marginLeft:"200px",marginTop:"20px",border:"none" ,borderRadius:"25px"}}>
            <div>
                <img src="data:image/png;base64,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" alt="BrandLogo" style={{width:"70px",padding:"auto",marginLeft:"14px",marginTop:"2px"}} />
            </div>
            <article style={{display:"flex" ,gap:"20px",marginTop:"2px"}}>
            <div style={{width:"60px",padding:"17px"}}>
                <span style={{fontSize:"17px",fontFamily:"sans-serif"}}>Servicies</span>
                <hr style={{color:"blue"}}/>
            </div>
            <div style={{width:"60px",padding:"17px"}}>
                <span style={{fontSize:"17px",fontFamily:"sans-serif"}}>Clients</span>
                <hr style={{color:"blue"}}/>
            </div>
            <div style={{width:"80px",padding:"17px"}}>
                <span style={{fontSize:"17px",fontFamily:"sans-serif"}}>Why Sisfy</span>
                <hr style={{color:"blue"}}/>
            </div>
            <div style={{width:"60px",padding:"17px"}}>
                <span style={{fontSize:"17px",fontFamily:"sans-serif"}}>Review</span>
                <hr style={{color:"blue"}}/>
            </div>
            <div style={{width:"60px",padding:"17px"}}>
                <span style={{fontSize:"17px",fontFamily:"sans-serif"}}>FAQs</span>
                <hr style={{color:"blue"}}/>
            </div>
            </article>
            <button style={{marginTop:"5px",height:"50px",padding:"17px",width:"150px",backgroundColor:"black",color:"white",border:"none",borderRadius:"12px",fontWeight:"bold"}}>
                Chat
            </button>
        </div>
      
        </>
    );
}
export default Nav;