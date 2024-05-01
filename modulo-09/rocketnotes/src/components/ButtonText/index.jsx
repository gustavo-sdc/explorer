import { Container } from "./style";

export function ButtonText({title, ...rest}){
    return(
        <Container 
            type=""
            {...rest}
        >
            {title}
        </Container>
    )
}