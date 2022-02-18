import React from 'react'
import { InfoContainer, InfoRow, InfoWrapper, Column1, Column2, TextWrapper,TopLine, Heading, Subtitle, ButtonWrap, Button, ImageWrapper, Img} from './InfoElement'

const InfoSection = ({
    lightBg,
    id,
    lightText,
    topLine,
    headline,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary,
    darkText}) => {
  return (
    <InfoContainer lightBg={lightBg}>
    <InfoWrapper>
        <InfoRow imgStart={imgStart}>
            <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <ButtonWrap>
                        <Button>{buttonLabel}</Button>
                    </ButtonWrap>
                </TextWrapper>
            </Column1>
            <Column2>
                <ImageWrapper>
                    <Img src={img} alt={alt} />
                </ImageWrapper>
            </Column2>
            <Column2></Column2>
        </InfoRow>
    </InfoWrapper>
</InfoContainer>
  )
}

export default InfoSection