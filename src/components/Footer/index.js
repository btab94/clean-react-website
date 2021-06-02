import React from 'react';
import {
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter
} from 'react-icons/fa';
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Reviews</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">Terms Of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Reviews</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">Terms Of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Reviews</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">Terms Of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Reviews</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">Terms Of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Zico FC
                        </SocialLogo>
                        <WebsiteRights>Zico FC © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aroa-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aroa-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aroa-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aroa-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
