import React, {useState, useEffect} from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper,FooterWrap, SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap, WebsiteRights} from './FooterElement'


const Footer = () => {

    const dev = JSON.parse(localStorage.getItem('dev'));

    const [email, setEmail] = useState("")

    useEffect(() => {
        if (dev) {
            setEmail(dev.email)
        }
    })

    return (
        <FooterContainer id={'contactus'}>
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                              <FooterLink to='/sign-in'>How it works</FooterLink>
                              <FooterLink to='/sign-in'>Testimonials</FooterLink>
                              <FooterLink to='/sign-in'>Careers</FooterLink>
                              <FooterLink to='/sign-in'>Investors</FooterLink>
                              <FooterLink to='/sign-in'>Terms of Services</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                            <FooterLinkTitle>Videos </FooterLinkTitle>
                              <FooterLink to='/sign-in'>Submit Video</FooterLink>
                              <FooterLink to='/sign-in'>Ambassadors</FooterLink>
                              <FooterLink to='/sign-in'>Agency</FooterLink>
                              <FooterLink to='/sign-in'>Influencer</FooterLink>
                              </FooterLinkItems>
                      <FooterLinkItems>
                            <FooterLinkTitle>Contact Us </FooterLinkTitle>
                              <FooterLink to='/sign-in'>Contact</FooterLink>
                              <FooterLink to='/sign-in'>Support</FooterLink>
                              <FooterLink to='/sign-in'>Destinations</FooterLink>
                              <FooterLink to='/sign-in'>Sponsorships</FooterLink>
                              <FooterLink to='/sign-in'>Terms of Services</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                            <FooterLinkTitle>Social Media </FooterLinkTitle>
                              <FooterLink to='/sign-in'>Instagram</FooterLink>
                              <FooterLink to='/sign-in'>Facebook</FooterLink>
                              <FooterLink to='/sign-in'>Youtube</FooterLink>
                              <FooterLink to='/sign-in'>Twitter</FooterLink>
                              <FooterLink to='/sign-in'>Pinterest</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='/'>TshibsFy</SocialLogo>
                        <WebsiteRights> © {new Date().getFullYear()} All rights reseverd.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//facebook.com' target='_blank' aria-label='facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//twitter.com' target='_blank' aria-label='twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//youtube.com' target='_blank' aria-label='youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//instagram.com' target='_blank' aria-label='instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//linkedin.com' target='_blank' aria-label='linkedin'>
                                <FaLinkedinIn />
                            </SocialIconLink>
                        </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
    )
}

export default Footer
