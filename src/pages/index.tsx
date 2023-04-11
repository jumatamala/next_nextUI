import { GetStaticProps, NextPage } from "next"

import { pokeApi } from "../../api"
import { PokemonListResponse, Result } from "../../interfaces"
import { Card, Grid, Navbar, Row, Text, Link } from "@nextui-org/react"
import { Listado } from "../../components/ui/pokemon/listado-pokemon"
import { Menu } from "../../components/ui/navbar/navbar"
import NextLink from "next/link"


interface Props {
  pokemon: Result[]
 }

const HomePage: NextPage<Props> = ( props ) => {

  return (
    <>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Pokedex
          </Text>
        </Navbar.Brand>
       <NextLink legacyBehavior href="/" passHref>
          <Link color="inherit" underline>
            <Text b color="inherit" hideIn="xs">
              Home 
            </Text>
          </Link>
        </NextLink>
        
      </Navbar>
       <Text
          h6
          size={45}
          css={{
            margin: "1rem 1rem 1rem 1rem",
            p: 3,
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
      >
        Listado de Pokemons
      </Text>
      <Grid>
        <Grid.Container gap={2} justify="flex-start">
        {
          props.pokemon.map(( pokemon ) => (
            <Listado key={ pokemon.id } pokemon = {pokemon} />
          )) 
        }
        </Grid.Container>
      </Grid>
    </>
  )

}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151")

  const pokemon: Result[] = data.results.map((pokemon, index) => {
    
    const number = index + 1
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`
    return {
      ...pokemon,
      image,
      id: number,
    }
  })
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  return {
    props: {
      pokemon: pokemon,
    }
  }
}

export default HomePage