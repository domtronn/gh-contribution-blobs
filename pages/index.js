/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment, useState } from 'react'

import fetch from 'unfetch'

/* ssr */
import fs from 'fs'
import path from 'path'

/* Structure */
import Head from 'next/head'
import Footer from '../src/modules/footer'
import { Flex, Box } from 'reflexbox'
import Container from '../src/elements/container'
import WaveContainer from '../src/elements/wave-container'

/* Elements */
import Slider from '../src/elements/slider'
import Main from '../src/elements/main'

/* Compounds */
import CBlob from '../src/compounds/contribution-blob';
import Bar from '../src/compounds/bar'
import NavBar from '../src/compounds/navbar'

import { shadow } from '../src/utils/theme-ui'

const fetcher = url => fetch(url).then(res => res.json())

const SliderBox = ({ children }) => (
  <Box
    width={[1, 1/3, 1/3]}
    sx={{ px: [0, 0, 'md'], my: ['md', 0, 0], display: 'inline-block' }}
  >
    {children}
  </Box>
)

const Home = ({ data: _data }) => {
  /* Slider control */
  const [range, setRange] = useState(15)
  const [smooth, setSmooth] = useState(0.2)
  const [opacity, setOpacity] = useState(0.4)

  /* Nav control */
  const [highlighted, setHighlighted] = useState(null)
  const [selected, setSelected] = useState(null)
  const highlights = [selected].filter(i => !!i)

  /* Form control */
  const [username, setUsername] = useState()
  const [data, setData] = useState(_data)
  const [loading, setLoading] = useState(false)

  return (
    <Fragment>
      <Head>
        <title>Git.Blobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Box sx={{ zIndex: 'max', position: 'relative' }}>
          <Styled.h1
            sx={{
              textShadow: shadow('heading')
            }}
          >
            Git.Blobs
          </Styled.h1>
        </Box>

        <Container sx={{ zIndex: 'more' }}>
          <NavBar
            sx={{ right: 0 }}
            onHover={setHighlighted}
            onClick={setSelected}
            data={data}
          />
          <CBlob
            opacity={opacity}
            smooth={smooth}
            range={range}
            data={data}
            highlight={highlights}
          />
        </Container>

        <WaveContainer
          dFrom='M0,256L40,245.3C80,235,160,213,240,213.3C320,213,400,235,480,245.3C560,256,640,256,720,250.7C800,245,880,235,960,208C1040,181,1120,139,1200,133.3C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
          dTo='M0,192L80,213.3C160,235,320,277,480,282.7C640,288,800,256,960,250.7C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          from='grey'
          to='primary'
          sx={{
            position: 'relative',
            width: '100%',
            backgroundColor: 'grey',
            minHeight: 320,
          }}
        >
          <Bar>
            <Box width={1}>

              <input
                placeholder='username'
                onChange={e => setUsername(e.target.value)}
              ></input>
              <label>
                {username}
              </label>
              <button onClick={async e => {
                setLoading(true)
                const res = await fetch(`/api/user/${username}`)
                const data = await res.json()
                setData(data)
                setLoading(false)
              }}>
                submit
              </button>

            </Box>
            <SliderBox>
              <Slider from={0.1} to={0.4} step={0.05} value={smooth} onChange={setSmooth} />
            </SliderBox>
            <SliderBox>
              <Slider from={9} to={21} step={3} value={range} onChange={setRange} />
            </SliderBox>
            <SliderBox>
              <Slider from={0.1} to={0.9} step={0.2} value={opacity} onChange={setOpacity} />
            </SliderBox>
          </Bar>
        </WaveContainer>
        <Footer />
      </Main>
    </Fragment>
  )
}

export async function getStaticProps (ctx) {
  const dataPath = path.join(process.cwd(), 'pages', 'api', 'data.json')
  const dataStr = fs.readFileSync(dataPath, 'utf-8')
  const data = JSON.parse(dataStr)

  return { props: { data } }
}

export default Home
