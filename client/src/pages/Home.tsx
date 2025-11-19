import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Building2, Users, TrendingUp, Award, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Launch your career in technology and business with our comprehensive learnership programs, designed to provide you with industry-recognized certifications and hands-on experience for high-demand roles.",
      link: "/learnerships",
    },
    {
      icon: BookOpen,
      title: "Professional Courses",
      description: "Enhance your expertise in the technology sector with our flexible short courses covering both technical skills and essential soft skills, available through flexible online and in-person formats.",
      link: "/courses",
    },
    {
      icon: Building2,
      title: "Corporate Solutions",
      description: "Customized corporate training services designed to meet your organization's specific requirements, maximizing skills development impact and strengthening your B-BBEE credentials.",
      link: "/corporate",
    },
  ];

  const stats = [
    { number: "500+", label: "Graduates Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "100+", label: "Corporate Clients" },
    { number: "4IR", label: "Technology Focus" },
  ];

  const services = [
    "Needs Gap Analysis",
    "Skills Development Facilitation",
    "Workplace Skills Planning",
    "Employment Equity Submissions",
  ];

  const benefits = [
    "Industry-recognized certifications",
    "Hands-on practical training",
    "Job placement assistance",
    "Flexible learning options",
    "Expert instructors",
    "Modern facilities",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Large Image */}
      <section className="relative bg-gradient-to-r from-[#D2691E] to-[#FF8C00] text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <p className="text-sm font-semibold mb-4 opacity-90">Leading Digital Skills Training</p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Shape Your Digital Future
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Empowering individuals and organizations through cutting-edge technology education and professional development programs
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/programs">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Training Programs
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                    Professional Courses
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
              <img
                src="/hero-slider-1.jpg"
                alt="Students learning in modern classroom"
                className="w-full h-full object-cover rounded-2xl lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover pathways to success through our comprehensive training solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Link href={program.link}>
                    <Button variant="ghost" className="group">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with Large Image */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold text-primary mb-4">Empowering Minds, Innovating Futures</p>
              <h2 className="text-4xl font-bold mb-6">
                Transform Your Career Through Comprehensive <span className="text-primary">Technology Training</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                DNAcademy is a premier technology training institution committed to delivering excellence in ICT education. We combine theoretical knowledge with practical application to cultivate highly skilled technology professionals, with particular emphasis on Fourth Industrial Revolution competencies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our mission centers on connecting organizations seeking expert technology talent with motivated learners who possess the capability and determination to excel in these critical roles. Through our innovative blended learning approach, we bridge the digital skills gap while fostering locally-based technological expertise.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img
                src="/hero-slider-2.jpg"
                alt="IT Professional coding"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="py-0">
        <div className="w-full">
          <img
            src="/about-hero.jpg"
            alt="Team collaboration"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Elevate Your Workforce. Close the Digital Skills Gap
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Transform your team's Information, Communication, and Technology capabilities through our comprehensive corporate training solutions delivered via an intuitive, user-friendly platform. Partner with us as your trusted technology training provider and together let's empower your organization's future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-secondary-foreground/10 border-secondary-foreground/20">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <Link href="/become-client">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">100+</p>
              <p className="text-lg opacity-90">Corporate Clients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">4IR</p>
              <p className="text-lg opacity-90">Technology Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('/corporate-hero-large.jpg')" }}>
        <div className="absolute inset-0 bg-secondary/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-secondary-foreground">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of students who have already started their journey to a successful career in technology. Whether you're an individual looking to upskill or an organization seeking to develop your workforce, we have the perfect solution for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/become-learner">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Become a Learner
                </Button>
              </Link>
              <Link href="/become-client">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary">
                  Become a Client
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
