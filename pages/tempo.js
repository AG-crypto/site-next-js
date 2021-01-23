function Tempo(props){
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <div>
            {dynamicDateString} (dinâmico)
            {props.staticDateString} (estático)
        </div>
    )
}

export function GetStaticProps(){
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo