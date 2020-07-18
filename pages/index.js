/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'

import fetch from 'unfetch'

import { pivotAndFilter } from './api/utils/data'
import { isEmpty } from '../src/utils/obj'

import { RiCalendarCheckLine, RiCalendarEventLine, RiCodeLine, RiDownloadCloud2Line } from 'react-icons/ri'

/* ssr */
import fs from 'fs'
import path from 'path'

/* Structure */
import Head from 'next/head'
import Footer from '../src/modules/footer'
import { Flex, Box } from 'reflexbox'
import Container from '../src/elements/container'
import WaveContainer from '../src/elements/wave-container'

import Button from '../src/elements/button'
import TextAutocomplete from '../src/elements/text-autocomplete'
import Checkbox from '../src/elements/checkbox'

/* Elements */
import Slider from '../src/elements/slider'
import Loader from '../src/elements/loader'
import Error from '../src/elements/error'
import Main from '../src/elements/main'

/* Compounds */
import CBlob from '../src/compounds/contribution-blob'
import CScale from '../src/compounds/contribution-scale'
import Bar from '../src/compounds/bar'
import NavBar from '../src/compounds/navbar'

import { shadow } from '../src/utils/theme-ui'
import { download } from '../src/utils/download'

const cleanSVG = (txt = '') => txt
  .replace(/<text.*?<\/text>/g, '')
  .replace(/ class=".+?"/g, '')
  .replace(/ data-year=".+?"/g, '')

const SliderBox = ({ children, className }) => (
  <Box
    width={[1, 1 / 3, 1 / 3]}
    sx={{ px: [0, 0, 'md'], my: ['md', 0, 0], display: 'inline-block', textAlign: 'center' }}
    className={className}
  >
    {children}
  </Box>
)

const Home = ({ data: _data }) => {
  /* Slider control */
  const [range, setRange] = useState(15)
  const [smooth, setSmooth] = useState(0.2)
  const [opacity, setOpacity] = useState(0.4)
  const [showGuide, setShowGuide] = useState(false)

  /* Nav control */
  const [highlighted, setHighlighted] = useState(null)
  const [selected, setSelected] = useState(null)
  const highlights = [highlighted].filter(i => !!i)

  /* Form control */
  const [username, setUsername] = useState()
  const [suggestions, setSuggestions] = useState([])
  const [data, setData] = useState(_data)
  const [loading, setLoading] = useState(false)

  const [rt, setrt] = useState(null)

  /** Handlers */
  const handleSubmit = async (value) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/user/${value}`)
      const data = await res.json()
      setHighlighted(null)
      setSelected(null)
      setData(data)
      setLoading(false)
    } catch (e) {
      setHighlighted(null)
      setSelected(null)
      setLoading(false)
      setData({})
    }
  }

  const handleSearch = async (value) => {
    setUsername(value)
    clearTimeout(rt)
    setrt(setTimeout(async () => {
      try {
        const res = await fetch(`/api/suggest/${value}`)
        const data = await res.json()
        setSuggestions(data)
      } catch (e) {
        setSuggestions([])
      }
    }, 300))
  }

  return (
    <>
      <Head>
        <title>Git.Blobs</title>
        <meta name='description' content='Generative art built from your GitHub commit history' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
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

        <Container sx={{
          zIndex: 'more',
          display: 'flex',
          justifyContent: isEmpty(data) ? 'center' : 'initial',
          '> *': { transition: 'all 0.4s ease-in-out' }
        }}
        >
          <Error error={isEmpty(data) && !loading}>
            <Styled.b sx={{ fontSize: '1.4em' }}>Oh no!</Styled.b>
            <br />
            We couldn't find any data for that user.
          </Error>

          <Loader
            sx={{
              opacity: loading ? 1 : 0,
              transitionDelay: loading ? '0.6s !important' : '0 !important',
              transformOrigin: '0 0',
              transform: loading ? 'scale(1)' : 'scale(0)',
              position: 'absolute',
              left: '50%',
              top: '50%',
              '> *': {
                ml: '-50%',
                mt: '-50%'
              }
            }}
            animate={loading}
            data={data}
          />

          <NavBar
            sx={{ right: 0, opacity: loading ? 0 : 1 }}
            onHover={setHighlighted}
            onClick={setSelected}
            data={data}
          />
          <div
            sx={{
              transform: loading ? 'scale(0)' : 'scale(1)',
              marginX: [0, 'auto']
            }}
          >
            <CBlob
              opacity={opacity}
              smooth={smooth}
              range={range}
              data={data}
              highlight={highlights}
            >
              {showGuide && <CScale />}
            </CBlob>
          </div>
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
            minHeight: 320
          }}
        >
          <Bar>
            <Flex
              width={1}
              alignItems='center'
              justifyContent='center'
              sx={{
                mt: -40,
                textAlign: 'center',
                px: [0, 'sm', 'md']
              }}
            >
              <TextAutocomplete
                inputProps={{ placeholder: 'GitHub username' }}
                value={username}
                items={suggestions}
                onSelect={(value) => {
                  setUsername(value)
                  handleSubmit(value)
                }}
                onChange={(e, value) => handleSearch(value)}
                getItemValue={({ login = '' }) => login}
                renderItem={({ login, avatarUrl } = {}) => (
                  <>
                    <img sx={{ height: 32, width: 32, mr: 'md', borderRadius: 'round' }} src={avatarUrl} />
                    {login}
                  </>
                )}
              >
                Github username
              </TextAutocomplete>
            </Flex>

            <Flex
              alignItems='center'
              sx={{ mt: 'md', mb: 'lg' }}
              width={1}
            >
              <SliderBox>
                <p sx={{ fontSize: '0.8em', marginBottom: 'sm' }}>Smoothness</p>
                <Slider id='smoothness' from={0.1} to={0.4} step={0.05} value={smooth} onChange={setSmooth}>
                  Smoothness
                </Slider>
              </SliderBox>
              <SliderBox>
                <p sx={{ fontSize: '0.8em', marginBottom: 'sm' }}>Variance</p>
                <Slider id='variance' from={9} to={21} step={3} value={range} onChange={setRange}>
                  Maxima variance
                </Slider>
              </SliderBox>
              <SliderBox>
                <p sx={{ fontSize: '0.8em', marginBottom: 'sm' }}>Opacity</p>
                <Slider id='opacity' from={0.1} to={0.9} step={0.2} value={opacity} onChange={setOpacity}>
                  Opacity
                </Slider>
              </SliderBox>
            </Flex>

            <Flex
              width={1}
              alignItems='center'
              justifyContent='center'
              sx={{ mb: -40 }}
            >
              <Button
                aria-label='download-svg'
                onClick={() => download(`${username || 'blob'}.svg`, 'contribution-blob', cleanSVG)}
              >
                <RiDownloadCloud2Line size='1.8em' />
              </Button>
              <Button aria-label='download-svg'>
                <RiCodeLine size='2em' />
              </Button>
              <Checkbox
                onClick={() => setShowGuide(!showGuide)}
                on={RiCalendarCheckLine}
                off={RiCalendarEventLine}
              >
                Show months guide
              </Checkbox>
            </Flex>

          </Bar>

          <Container
            sx={{
              mt: 'xl',
              pb: 'xxl'
            }}
          >
            <Box
              width={[1, 1, 2 / 3]}
            >
              <Styled.p>
                <b>Git.Blobs</b> is an idea I had to create generative art from
                your GitHub contributions
              </Styled.p>
            </Box>
          </Container>

        </WaveContainer>
        <Footer />
      </Main>
    </>
  )
}

export async function getStaticProps (ctx) {
  const dataPath = path.join(process.cwd(), 'pages', 'api', 'data.json')
  const dataStr = fs.readFileSync(dataPath, 'utf-8')
  const data = JSON.parse(dataStr)

  return { props: { data: pivotAndFilter(data) } }
}

export default Home
