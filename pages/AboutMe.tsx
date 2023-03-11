import Link from "next/link"
import { faLinkedin,faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useEffect, useState } from "react";


const Articles = () => {
    const [posts, setPosts] = useState<any>([]);
    const fetchData =() => {
        fetch("https://api.quotable.io/random?tags=technology,famous-quotes")
        .then((response)=>{
            return response.json();
        })
        .then((data)=> {
            setPosts(data)
        })
    }
    useEffect(()=> {
        fetchData();
    },[]);
    
return (

    <>

    <h1>About Me</h1>
    <p className = "AboutMe"> Hey, I'm Aoife. 
        I work in the field of Data Analysis and Machine Learning. My background is in Data, 
        AI and Natural Language Processesing having studied Computer Science, 
        Lingusitics and French for four years in Trinity College Dublin. I went on to complete 
        masters degree in Computer Science with a focus on Data Science in areas such as Big Data, 
        Data Mining and Advanced Machine Learning. 
    </p>


        {/* random insipring technology quote  */}
        <h2 className = "Quotes"> {posts.content} <br>
        </br>-{posts.author}</h2> 


        {/* styling for contact details contaning links   */}
        {/* <Link href="" className={`${HomepageStyles.link} linkedin_Link`}>  halloe </Link> */}
        <div className="ContactDetails">

            <Link href="https://www.linkedin.com/in/aoife-mitchell-7b0b0a222/" className="fa fa-linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            <Link href="mailto:aoifekmitchell2000@gmail.com?subject=SendMail&body=Description" className="fa fa-Google">
            <FontAwesomeIcon icon={faGoogle} />
            </Link>

            <Link href="#" className="fa fa-phone">
            <CopyToClipboard
                text="0851005393"
                onCopy={() => alert(" Number: 0851005393 Copied")}>
                <span><FontAwesomeIcon icon={faPhone} /></span>       
            </CopyToClipboard>
            </Link>


        </div> 
    
    </>
)
}

export default Articles; 