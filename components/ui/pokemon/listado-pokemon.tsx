import { FC } from "react"
import { useRouter } from "next/router"
import { Result } from "../../../interfaces"
import { Card, Grid, Row, Text } from "@nextui-org/react"


interface Props {
    pokemon: Result
}


export const Listado: FC<Props> = ( { pokemon } ) => {

    const router = useRouter()
    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

  return (
        <Grid xs={6} sm={3} md={2} xl={2} key={ pokemon.id }>
            <Card onClick={onClick} isHoverable isPressable>
                <Card.Body css={{ p:1}}>
                <Card.Image src={pokemon.image} width="100%" height={140} alt={pokemon.name} />
                </Card.Body>
                <Card.Footer >
                <Row justify='space-between'>
                    <Text small>#{pokemon.id}</Text>
                    <Text small>{pokemon.name}</Text>
                </Row>
                </Card.Footer> 
            </Card>
        </Grid>

  )
}
