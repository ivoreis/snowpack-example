import React, { FunctionComponent } from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'

const PinkParagraph = styled.p({
  color: 'hotpink',
})

const App: FunctionComponent = () => {
  return (
    <div>
      <Global
        styles={css`
          html,
          body {
            width: 100vw;
            height: 100vh;
            margin: 0;
            min-height: 100%;
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
              'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
              'Droid Sans', 'Helvetica Neue', sans-serif;
          }
        `}
      />
      <PinkParagraph>Hello world!</PinkParagraph>
    </div>
  )
}

export default App
