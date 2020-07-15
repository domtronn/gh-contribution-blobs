/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment } from 'react'

import Head from 'next/head'

import Main from '../src/elements/main'
import Footer from '../src/modules/footer'

import CBlob from '../src/compounds/contribution-blob';
import data from '../src/data.json'

const Home = () => (
  <Fragment>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <div className='hero'>
        <Styled.h1>Git.Blobs</Styled.h1>
      </div>

      <div
        sx={{ textAlign: 'center' }}
      >
        <CBlob
          data={data}
        />
      </div>

      <div
        sx={{
          position: 'relative',
          zIndex: 'less',
          width: '100%',
          backgroundColor: 'grey',
          height: '300px'
        }}
      >
        <svg
          sx={{  fill: 'grey', mt: -320 }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path d="M0,256L40,245.3C80,235,160,213,240,213.3C320,213,400,235,480,245.3C560,256,640,256,720,250.7C800,245,880,235,960,208C1040,181,1120,139,1200,133.3C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>

      <Footer />
    </Main>
  </Fragment>
)

export default Home
