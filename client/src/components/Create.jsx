import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  align-self: center;
`
const Wrapper = styled.div``
const ImgInput = styled.input``
const ImgPreview = styled.img`
  width: 50rem;
  height: auto;
`

export const Create = () => {
  const [file, setFile] = useState();

  const handleChange = (e)=>{
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <Container>
      <Wrapper>
        <ImgInput type="file" onChange={handleChange}></ImgInput>
        <ImgPreview src={file} />
      </Wrapper>
    </Container>
  )
}
