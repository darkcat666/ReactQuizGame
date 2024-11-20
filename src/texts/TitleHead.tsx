import styled from "styled-components"

const H1 = styled.h1`
    font-weight: bold;
`

const P = styled.p`
    font-color: red;
    font-style: Italic;
`

const TitleHead = () => {

    return (
        <>
            <H1>おい、てめえ！俺のナイフを舐めろ！！</H1>

            <div><P>・・・というわけで、君たちには性教育について学んでもらいます。。。
            これから１０問のクイズを提出しますので、すべて正当してください。できるよな？</P></div>
        </>
    )
}

export default TitleHead