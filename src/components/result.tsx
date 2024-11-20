import styled from "styled-components"
import { jsondata, sexEducationType } from "../texts/question1json";
import { useState } from "react";

interface props {
    jsonState: sexEducationType[],
}

const Result = (props: props) => {

    const titler = () => {
        const sexmaster = props.jsonState.filter((item) => item.isvisible).length

        if (sexmaster >= 10) {
            return <p style={{color: "red"}}>セックス・オブ・ザ・イヤー</p>;
        } else if (sexmaster === 1) {
            return <p style={{color: "red"}}>ラーメンババア</p>;
        } else if (sexmaster === 0) {
            return <p style={{color: "red"}}>お花</p>;
        } else {
            return <p style={{color: "red"}}>かぐや姫</p>;
        }
    } 
    
    return (
        <>
            <div>Result</div>
            あなたの称号：{titler()}
        </>
    )
}

export default Result