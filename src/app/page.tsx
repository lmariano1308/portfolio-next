import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import Description from '@/components/Description'
import profilePic from '@/assets/images/profile.jpg'
import Card from '@/components/Card'
import TextCarousel from '@/components/TextCarousel'
import * as S from './styles'

export default function Home() {
  return (
    <>
      <S.TopContainer>
        <S.PresentationContainer>
          <Title>Hi! I&apos;m Lucas.</Title>
          <S.CarouselContainer>
            <Subtitle>I&apos;m a</Subtitle>
            <TextCarousel
              words={[
                'Front-End Developer',
                'Motion Designer',
                'UX/UI',
                'React Specialist',
              ]}
            />
          </S.CarouselContainer>
        </S.PresentationContainer>
        <S.ProfileImage
          src={profilePic}
          alt="Profile picture"
          width={125}
          height={125}
        />
        <Description>
          Hi, I&apos;m Lucas Mariano, a front-end developer who enjoys coding,
          unleash my creativity and solve problems. I&apos;m passionate about
          technology and always looking for new challenges.
        </Description>
      </S.TopContainer>
      {/* <S.MiddleContainer>
        <Card>Hi!</Card>
      </S.MiddleContainer> */}
    </>
  )
}
