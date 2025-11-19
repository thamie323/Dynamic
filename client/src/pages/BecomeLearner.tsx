import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import WaveDivider from "@/components/WaveDivider";

export default function BecomeLearner() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idNumber: "",
    program: "",
    education: "",
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

    toast.success("Application submitted successfully! We'll contact you soon.");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      idNumber: "",
      program: "",
      education: "",
      message: "",
    });
  };

  const benefits = [
    "Industry-recognized certifications",
    "Hands-on practical training",
    "Job placement assistance",
    "Experienced instructors",
    "Flexible learning schedules",
    "Modern training facilities",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Wave Divider */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <GraduationCap className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Become a Learner</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95">
            Start your journey to a successful career in technology
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
                  <CardTitle>Program Benefits</CardTitle>
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
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Application Form</CardTitle>
                  <p className="text-muted-foreground">
                    Complete the form below to apply for our training programs. All fields are required.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
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
                    </div>

                    {/* ID Number */}
                    <div>
                      <label htmlFor="idNumber" className="block text-sm font-medium mb-2">
                        South African ID Number *
                      </label>
                      <Input
                        id="idNumber"
                        name="idNumber"
                        type="text"
                        required
                        value={formData.idNumber}
                        onChange={handleChange}
                        placeholder="YYMMDDXXXXXXX"
                        maxLength={13}
                      />
                    </div>

                    {/* Program Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Program Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="program" className="block text-sm font-medium mb-2">
                            Preferred Program *
                          </label>
                          <Select
                            value={formData.program}
                            onValueChange={(value) => handleSelectChange("program", value)}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="it-systems">IT: Systems Development</SelectItem>
                              <SelectItem value="it-support">IT: Technical Support</SelectItem>
                              <SelectItem value="it-network">IT: Network Engineering</SelectItem>
                              <SelectItem value="business-admin">Business Administration</SelectItem>
                              <SelectItem value="data-science">Data Science</SelectItem>
                              <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label htmlFor="education" className="block text-sm font-medium mb-2">
                            Highest Education Level *
                          </label>
                          <Select
                            value={formData.education}
                            onValueChange={(value) => handleSelectChange("education", value)}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select education level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="matric">Grade 12 (Matric)</SelectItem>
                              <SelectItem value="certificate">Certificate</SelectItem>
                              <SelectItem value="diploma">Diploma</SelectItem>
                              <SelectItem value="degree">Degree</SelectItem>
                              <SelectItem value="postgrad">Postgraduate</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Tell us about yourself and why you want to join this program
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your background, interests, and career goals..."
                        rows={5}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our terms and conditions. We'll contact you within 2-3 business days.
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
