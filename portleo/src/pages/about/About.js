import './About.css'
import AboutCard from "../../shared/AboutCard/AboutCard";

function About(params) {
    return (
        <div className="about-container">
            <AboutCard
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            name='Anthony Gonzalvis'
            pronouns='he/his'
            designation='Frontend Developer'
            description='I have more than 9 years of experiance in creating beautiful and interactive websites.'></AboutCard>
            <AboutCard
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            name='Mohammad Naseer'
            pronouns='he/him'
            designation='Backend Developer'
            description='I have more than 15 years of experiance maintaining and bulding applications.'></AboutCard>
            <AboutCard
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            name='Catlyn Nash'
            pronouns='them/they'
            designation='Relation Manager'
            description='I love interacting and making new connections that could help in creating more diverse society.'></AboutCard>
            <AboutCard
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            name='Masha Moggre'
            pronouns='she/her'
            designation='Promoter'
            description='I promote, that is what I do and I am damn good at it.'></AboutCard>
        </div>
    );
}

export default About;