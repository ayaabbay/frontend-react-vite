/* import { useState } from 'react';


const Row2 =()=>{
    const [file, setFile]= useState()

    function handleFile(event) {
        setFile(event.target.files[0]) 
/*         console.log(event.target.files[0])
    }
    function handleUpload(){
        const formData =new FormData()
        formData.append('file',file)
        fetch(
            'url',
            {
                method:"POST",
                body: formData
            }
        ).then((response) => response.json())
        .then(
            (result) =>{
                console.log('success',result)
            }
        )
        .catch(error =>{
            console.error("error:",error)
        })
    }
    return(
    <div>
        <h2> ton rapport uploading </h2>
        <form onSubmit={handleUpload} >
            <input type="file" name='file' onChange={handleFile} />
            <button>Upload</button>
        </form>
    </div>
    );
}
export default Row2; 

*/
import { useState } from "react";
import "./Row2.css";
function Row2 ()  {
const [title,setTitle]=useState("");
const [file,setFile]=useState("");
const submitImage=async (e) => {
    e.preventDefault();
    const formData= new FormData();
    formData.append("title",title);
    formData.append("file",file);
    console.log(title,file)
};
  return (
        <div className="App">
            <form className="formStyle" onSubmit={submitImage}>
                <h4>Upload Pdf in React</h4><br />
                <input
                 type="text" 
                 className="form-control" 
                 placeholder="Title" 
                 required 
                 onChange={(e)=>setTitle (e.target.value)}
                 />
                 <br/>
                <input 
                 type="file" 
                 className="form-control" 
                 accept="application/pdf" 
                 required
                 onChange={(e) =>setFile(e.target.files[0])}

                  />
                  <br/>
                <button class="btn btn-primary " type="submit">
                    Submit
                </button>
            </form>
        </div>
    );


}
export default Row2;



