import React,{useState} from "react";

const Hoc = (Originalcomp)=>{
    const newComp =()=>{
        const [likeImageCounter, setLikeImageCounter] = useState(0);

        const handleLikeImageCount = ()=>{
          setLikeImageCounter(likeImageCounter+1);
        };
        return (
            <div>
                <Originalcomp likeImageCounter={likeImageCounter} handleLikeImageCount={handleLikeImageCount} />
            </div>
        )
    }
    return newComp

}
export default Hoc