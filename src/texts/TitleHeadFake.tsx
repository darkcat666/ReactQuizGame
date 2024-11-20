import styled from "styled-components"

const H1 = styled.h1`
    font-weight: bold;
`

const P = styled.p`
    font-color: red;
    font-style: Italic;
`

const TitleHeadFake = () => {

    return (
        <>
            <H1>sakiのおとうふクイズ♪</H1>

            <div><P>sakiがおとうふについてクイズをするよ！がんばろー</P></div>
        </>
    )
}

export default TitleHeadFake