import Head from 'next/head'
import { FC } from 'react'
import { Container, Row, Col, Card, Text, Button } from '@nextui-org/react';


interface LayoutProps {
  title?: string,
  children?: string
}

export const Layout: FC <LayoutProps> = ( {children , title}  ) => {
  return (
    <>
        <Head>
            <title>{title || 'NextJS + NextUI'}</title>
            <meta name="author" content="JMT"/>
        </Head>
        
        {/* Navbar */}
        <main>
        <Container>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Row justify="center" align="center">
              { children  }
              <h3>Hola bebe!</h3>
              <Button color={"gradient"} > click </Button>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        </main>
    </>
  )
}

