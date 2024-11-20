import styled from "styled-components";
import { jsondata, sexEducationType } from "../texts/question1json";
import { Dispatch, SetStateAction, useState } from "react";

interface props {
    jsonState: sexEducationType[],
    setJsonState: Dispatch<SetStateAction<sexEducationType[]>>,
}

const SexGame = (props: props) => {

    const setFlag = (id: string) => {
        const newJsonData: sexEducationType[] = props.jsonState.map((item) => {
            if (id === item.id) {
                return {
                    isvisible: true,
                    id: item.id,
                    question: item.question,
                    answer: item.answer,
                }
            }
            
            return item
        })
        
        props.setJsonState(newJsonData);
    }

    return (
        <>
            <div>SexGame</div>
            <div>
                <br />
                {props.jsonState.map((item, index) => (
                    <div key={index}>
                        {item.id}. 
                        {item.question}
                        <button onClick={() => setFlag(item.id)}>いのちのこたえ</button><p style={{color: "red"}}>{item.isvisible && item.answer}</p>
                    </div>
                ))}               
            </div>
        </>
    )
}

export default SexGame