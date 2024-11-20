import React, { useState } from "react"
import None, { NoneBack, NoneMoveOn } from "./none"
import Result from "./result"
import SexGame from "./sexgame"
import Title from "./title"
import { jsondata, sexEducationType } from "../texts/question1json"

interface props {
    page: string
}

const View = (props: props) => {
    const [jsonState, setJsonState ] = useState<sexEducationType[]>(jsondata);

    switch (props.page) {
        case "Title":
            return <Title />
        case "SexGame":
            return <SexGame jsonState={jsonState} setJsonState={setJsonState} />
        case "Result":
            return <Result jsonState={jsonState}/>
        case "None":
            return <None />
        case "NoneBack":
            return <NoneBack />
        case "NoneMoveOn":
            return <NoneMoveOn />
    }
}

export default View