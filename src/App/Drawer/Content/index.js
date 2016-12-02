import React from 'react'
import styled from 'styled-components'
import * as colors from '../../styles/colors'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Head = styled.div`
  height: 178px;
  background-color: ${colors.lightBlue};
  display: flex;
`

const IconBox = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;

  & > i {
    margin: auto;
    font-size: 50px;
    color: ${colors.buttonGrey};
    border: 1px solid ${colors.buttonGrey};
    border-radius: 56px;
    padding-bottom: 6px;
    padding-left: 3px;
    padding-right: 3px;
  }
`

const NameBox = styled.div`
  width: 100%;
  display: flex;

  & > span {
    color: ${colors.textWhite}
    margin: auto;
  }
`

const Center = styled.div`
  margin: auto;
`

const Content = () => (
  <Wrapper>
    <Head>
      <Center>
        <IconBox><i className={'material-icons'}>person_outline</i></IconBox>
        <NameBox><span>Michael Arnaldi</span></NameBox>
      </Center>
    </Head>
  </Wrapper>
)

export default Content
