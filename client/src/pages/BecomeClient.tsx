import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import WaveDivider from "@/components/WaveDivider";

export default function BecomeClient() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    companySize: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Thank you! Our corporate team will contact you within 24 hours.");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      industry: "",
      companySize: "",
      service: "",
      message: "",
    });
  };

  const benefits = [
    "Customized training solutions",
    "B-BBEE skills development support",
    "SETA grant assistance",
    "Flexible training schedules",
    "On-site and online options",
    "Comprehensive reporting",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Wave Divider */}
      <section className="relative bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <Briefcase className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Become a Client</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95">
            Partner with us for comprehensive corporate training solutions
          </p>
        </div>
        <WaveDivider color="hsl(var(--background))" />
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Corporate Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our corporate team is ready to assist you
                    </p>
                    <p className="text-sm font-medium">+27 (0) 11 759 5940</p>
                    <p className="text-sm font-medium">enquiries@dynamicdna.co.za</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Corporate Partnership Form</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your organization and training needs. We'll create a customized solution for you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Company Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                            Company Name *
                          </label>
                          <Input
                            id="companyName"
                            name="companyName"
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="ABC Corporation (Pty) Ltd"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="industry" className="block text-sm font-medium mb-2">
                              Industry *
                            </label>
                            <Select
                              value={formData.industry}
                              onValueChange={(value) => handleSelectChange("industry", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                <SelectItem value="retail">Retail</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="companySize" className="block text-sm font-medium mb-2">
                              Company Size *
                            </label>
                            <Select
                              value={formData.companySize}
                              onValueChange={(value) => handleSelectChange("companySize", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="11-50">11-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                                <SelectItem value="201-500">201-500 employees</SelectItem>
                                <SelectItem value="500+">500+ employees</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Person */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact Person</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contactPerson" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="contactPerson"
                            name="contactPerson"
                            type="text"
                            required
                            value={formData.contactPerson}
                            onChange={handleChange}
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+27 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    {/* Service Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Training Requirements</h3>
                      <div className="mb-4">
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Interested In *
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="skills-gap">Skills Gap Analysis</SelectItem>
                            <SelectItem value="corporate-training">Corporate Training Programs</SelectItem>
                            <SelectItem value="wsp">Workplace Skills Plan (WSP)</SelectItem>
                            <SelectItem value="bbbee">B-BBEE Skills Development</SelectItem>
                            <SelectItem value="seta">SETA Grant Assistance</SelectItem>
                            <SelectItem value="custom">Custom Training Solution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Tell us about your training needs and objectives *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your organization's skills development needs, number of employees to train, preferred training format, timeline, and any specific requirements..."
                          rows={6}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Our corporate team will review your request and contact you within 24 hours to discuss a customized training solution.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
