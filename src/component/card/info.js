import React,{useState} from "react";
import './info.scss'

const Info = ({ info }) => {

    const [readMore, setReadMore] = useState(false);

    return (
        <div>
            <p>
                {readMore ? info : `${info.substring(0, 100)}...`}
                <button id="info" onClick={() => setReadMore(!readMore)}>
                    {readMore ? " [닫기]" : " [더보기]"}
                </button>
            </p>
        </div>
    );
    
};
export default Info;