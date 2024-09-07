import { NoInfoCard } from "../NoInfoCard"

const VerifyLength = ({children, array=[]}) => {
    const data = array || [];

    if (data.length == 0) {
        return(
            <NoInfoCard/>
        )
    } else {
        return(children)
    }
}

export { VerifyLength }