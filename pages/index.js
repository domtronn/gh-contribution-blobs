/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment, useState } from 'react'

import Head from 'next/head'

import Slider from '../src/elements/slider'
import Main from '../src/elements/main'
import Footer from '../src/modules/footer'

import CBlob from '../src/compounds/contribution-blob';
import Bar from '../src/compounds/bar'
import NavBar from '../src/compounds/navbar'

import data from '../src/data.json'

const Home = () => {
  const [range, setRange] = useState(15)
  const [smooth, setSmooth] = useState(0.2)
  const [opacity, setOpacity] = useState(0.4)

  return (
  <Fragment>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <div sx={{
        position: 'relative',
        zIndex: 'max',
      }}
      >
        <Styled.h1>Git.Blobs</Styled.h1>
      </div>

      <div
        sx={{
          display: 'flex',
          position: 'relative',
          zIndex: 'more'
        }}
      >
        <NavBar
          sx={{
            right: '40vh'
          }}
          data={data}
        />
        <CBlob
          opacity={opacity}
          smooth={smooth}
          range={range}
          data={data}
        />
      </div>

      <div
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: 'grey',
          minHeight: 320,
        }}
      >
        <svg
          sx={{ fill: 'grey', mt: -320 }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path d="M0,256L40,245.3C80,235,160,213,240,213.3C320,213,400,235,480,245.3C560,256,640,256,720,250.7C800,245,880,235,960,208C1040,181,1120,139,1200,133.3C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        <Bar>
          <div sx={{ mx: 'md', display: 'inline-block', width: '25%' }}>
            <Slider from={0.1} to={0.4} step={0.05} value={smooth} onChange={setSmooth} />
          </div>
          <div sx={{ mx: 'md', display: 'inline-block', width: '25%' }}>
            <Slider from={9} to={21} step={3} value={range} onChange={setRange} />
          </div>
          <div sx={{ mx: 'md', display: 'inline-block', width: '25%' }}>
            <Slider from={0.1} to={0.9} step={0.2} value={opacity} onChange={setOpacity} />
          </div>
        </Bar>
      </div>

      <Footer />
    </Main>
  </Fragment>
)}

export default Home
