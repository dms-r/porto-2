import PageWrapper from '@/components/layout/PageWrapper';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Linkedin, Github, Phone } from 'lucide-react'; // Assuming Phone might be added later

export const metadata: Metadata = {
  title: 'Contact Me',
  description: `Get in touch with ${portfolioData.name}. Contact information including email and professional social media profiles.`,
};

export default function ContactPage() {
  const { contact, name } = portfolioData;

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <Linkedin className="h-6 w-6 text-accent" />,
      label: "LinkedIn",
      value: "View Profile",
      href: contact.linkedin,
      target: "_blank",
    },
    {
      icon: <Github className="h-6 w-6 text-accent" />,
      label: "GitHub",
      value: "View Profile",
      href: contact.github,
      target: "_blank",
    },
    // Example for Phone, if you add it to portfolioData
    // {
    //   icon: <Phone className="h-6 w-6 text-accent" />,
    //   label: "Phone",
    //   value: "+1 234 567 8900", // Replace with actual phone
    //   href: "tel:+12345678900",
    // },
  ];

  return (
    <PageWrapper>
      <section id="contact" className="max-w-3xl mx-auto animate-fadeIn">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>

        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-6">
            <CardTitle className="text-2xl md:text-3xl font-headline text-center">Contact {name}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-6">
            {contactMethods.map((method, index) => (
              <div key={method.label} className="flex items-start space-x-4 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex-shrink-0 mt-1">{method.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-primary">{method.label}</h3>
                  {method.href ? (
                     <Link
                      href={method.href}
                      target={method.target || "_self"}
                      rel={method.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="text-md text-foreground hover:text-accent hover:underline transition-colors break-all"
                    >
                      {method.value}
                    </Link>
                  ) : (
                    <p className="text-md text-foreground break-all">{method.value}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Optional: Add a simple contact form placeholder if needed in future */}
        {/* <div className="mt-12 text-center">
          <p className="text-muted-foreground">Or, fill out the form below:</p>
          <Button variant="link" className="text-accent text-lg" asChild>
            <Link href="/contact-form">Go to Contact Form</Link>
          </Button>
        </div> */}
      </section>
    </PageWrapper>
  );
}
