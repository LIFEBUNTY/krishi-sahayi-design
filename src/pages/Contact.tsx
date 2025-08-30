import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "വിവരങ്ങൾ പൂർത്തിയാക്കുക",
        description: "ദയവായി ആവശ്യമായ എല്ലാ വിവരങ്ങളും നൽകുക",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "സന്ദേശം അയച്ചു",
      description: "നിങ്ങളുടെ സന്ദേശം സ്വീകരിച്ചു. ഞങ്ങൾ ഉടൻ മറുപടി നൽകും",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            ബന്ധപ്പെടുക | Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            നിങ്ങളുടെ ഫീഡ്ബാക്ക്, നിർദ്ദേശങ്ങൾ, അല്ലെങ്കിൽ സാങ്കേതിക സഹായം ആവശ്യമുണ്ടെങ്കിൽ ബന്ധപ്പെടുക
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-primary text-2xl">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">ഇമെയിൽ | Email</h3>
                    <p className="text-muted-foreground">support@digitalkrishiofficer.gov.in</p>
                    <p className="text-muted-foreground">info@digitalkrishiofficer.gov.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-harvest/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-harvest" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">ഫോൺ | Phone</h3>
                    <p className="text-muted-foreground">+91 471 2xxx xxx (Malayalam)</p>
                    <p className="text-muted-foreground">+91 471 2xxx xxx (English)</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      സമയം: രാവിലെ 9 മണി മുതൽ വൈകുന്നേരം 6 മണി വരെ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sky" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">വിലാസം | Address</h3>
                    <p className="text-muted-foreground">
                      കേരള സർക്കാർ<br />
                      കാർഷിക വകുപ്പ്<br />
                      തിരുവനന്തപുരം, കേരളം - 695001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary text-xl">
                  പ്രധാന ലിങ്കുകൾ | Important Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="block text-muted-foreground hover:text-primary transition-colors border-b border-border pb-2"
                  >
                    സ്വകാര്യതാ നയം | Privacy Policy
                  </a>
                  <a 
                    href="#" 
                    className="block text-muted-foreground hover:text-primary transition-colors border-b border-border pb-2"
                  >
                    ഉപയോഗ നിബന്ധനകൾ | Terms of Service
                  </a>
                  <a 
                    href="#" 
                    className="block text-muted-foreground hover:text-primary transition-colors border-b border-border pb-2"
                  >
                    FAQ | പതിവുചോദ്യങ്ങൾ
                  </a>
                  <a 
                    href="#" 
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    സാങ്കേതിക സഹായം | Technical Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary text-2xl">
                സന്ദേശം അയയ്ക്കുക | Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">പേര് | Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="നിങ്ങളുടെ പേര് | Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">ഫോൺ | Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="ഫോൺ നമ്പർ | Phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">ഇമെയിൽ | Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="നിങ്ങളുടെ ഇമെയിൽ | Your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">വിഷയം | Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="സന്ദേശത്തിന്റെ വിഷയം | Message subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">സന്ദേശം | Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="നിങ്ങളുടെ സന്ദേശം വിശദമായി എഴുതുക... | Write your message in detail..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  സന്ദേശം അയയ്ക്കുക | Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12">
          <Card className="shadow-lg bg-gradient-to-r from-destructive/5 to-harvest/5 border-l-4 border-l-destructive">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  അടിയന്തര സഹായം | Emergency Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  ഗുരുതരമായ കാർഷിക പ്രശ്നങ്ങൾക്ക് 24/7 അടിയന്തര സഹായം
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center text-lg font-semibold text-foreground">
                    <Phone className="w-5 h-5 mr-2 text-destructive" />
                    Emergency: 1800-180-1551
                  </div>
                  <div className="text-muted-foreground">
                    (Toll Free - സൗജന്യ കോൾ)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};