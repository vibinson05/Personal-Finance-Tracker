"use client";
import Sidebar from "@/components/Sidebar";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh; /* Ensure the body takes the full height */
    background: linear-gradient(135deg, rgba(0, 102, 204, 0.8), rgba(0, 204, 204, 0.8)); /* Gradient background */
    font-family: Arial, sans-serif;
  }
`;


const Container = styled.div`
  display: flex;
  height: 100vh; /* Ensure container takes full height of the viewport */
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the content horizontally */
  height: 100%; /* Ensure hero section fills the full height */
`;

const HeadlineSection = styled.div`
  color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center the text horizontally */
  text-align: center; /* Center the text */
  height: 100%; /* Ensure full height */
`;

const Heading = styled.h1`
  font-size: 3rem; /* Increase the size of the heading */
  margin-bottom: 20px; /* Add space between heading and paragraph */
`;

const Paragraph = styled.p`
  font-size: 1.2rem; /* Adjust the paragraph font size */
  line-height: 1.6;
  max-width: 500px; /* Limit paragraph width */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Home() {
  return (
    <>
     
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          <HeroSection>
         
            <HeadlineSection>
              <Heading>Welcome to the Finance Tracker</Heading>
              <Paragraph>
                Take control of your financial journey with clarity, tracking every dollar with ease. Understand your spending, set budgets, and visualize your financial health. Empower yourself to make smarter decisions every day.
              </Paragraph>
            </HeadlineSection>
          </HeroSection>
        </Content>
      </Container>
    </>
  );
}