import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

export default function News() {
  const newsArticles = [
    {
      category: "SUCCESS STORIES",
      title: "Celebrating Our 2024 Graduates",
      date: "3 months ago",
      excerpt:
        "We're proud to celebrate another successful graduation ceremony with over 150 students completing their IT learnerships and ready to enter the workforce.",
      image: "/graduation-ceremony.jpg",
      tags: ["Graduation", "Success"],
    },
    {
      category: "PROGRAMS",
      title: "New Advanced AI & Machine Learning Course Launch",
      date: "1 month ago",
      excerpt:
        "Introducing our latest course focusing on artificial intelligence and machine learning, designed to prepare students for the future of technology.",
      image: "/coding-student.jpg",
      tags: ["AI", "New Course"],
    },
    {
      category: "CORPORATE",
      title: "Empowering Organizations Through Digital Transformation",
      date: "2 weeks ago",
      excerpt:
        "Learn how our corporate training solutions are helping South African businesses navigate the digital transformation journey and upskill their workforce.",
      image: "/corporate-training.jpg",
      tags: ["Corporate", "B-BBEE"],
    },
    {
      category: "COMMUNITY",
      title: "Building Inclusive Tech Communities",
      date: "1 week ago",
      excerpt:
        "Our 4IR4HER initiative continues to break barriers, empowering women in technology and creating more inclusive learning environments.",
      image: "/team-collaboration.jpg",
      tags: ["4IR4HER", "Community"],
    },
    {
      category: "INDUSTRY",
      title: "MICT SETA Discretionary Grant Window for 2025/26",
      date: "2 days ago",
      excerpt:
        "Important updates on the MICT SETA discretionary grant application window, deadlines, and requirements for businesses and training providers.",
      image: "/students-classroom.jpg",
      tags: ["SETA", "Grants"],
    },
    {
      category: "PARTNERSHIPS",
      title: "New Industry Partnerships Announced",
      date: "1 day ago",
      excerpt:
        "We're excited to announce new partnerships with leading technology companies to provide enhanced job placement opportunities for our graduates.",
      image: "/corporate-training.jpg",
      tags: ["Partnerships", "Jobs"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Wave Divider */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">What's New</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95">
            Stay updated with our latest news, success stories, and program announcements
          </p>
        </div>
        <WaveDivider color="hsl(var(--background))" />
      </section>

      {/* News Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest updates, industry insights, and exclusive content directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
