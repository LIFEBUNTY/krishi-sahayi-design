import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mic, Camera, Globe, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-farming.jpg';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative px-4 py-16 bg-gradient-to-r from-primary/5 to-harvest/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  ഡിജിറ്റൽ കൃഷി ഓഫീസർ
                </h1>
                <h2 className="text-2xl md:text-3xl text-primary/80">
                  Digital Krishi Officer
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  നിങ്ങളുടെ കൃഷിയുടെ എല്ലാ സംശയങ്ങളും AI ടെക്നോളജി ഉപയോഗിച്ച് 
                  മലയാളത്തിൽ പരിഹരിക്കാം | Get instant farming advice in Malayalam and English
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                  <Link to="/ask">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    ചോദ്യം ചോദിക്കുക | Ask a Query
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">
                    കൂടുതൽ അറിയുക | Learn More
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Farmers using digital technology" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              ഫീച്ചറുകൾ | Features
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              കാർഷിക സംശയങ്ങൾ പരിഹരിക്കാൻ ആവശ്യമായ എല്ലാ സൗകര്യങ്ങളും
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    ടെക്സ്റ്റ് ചോദ്യങ്ങൾ
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Malayalam and English text queries | മലയാളത്തിലും ഇംഗ്ലീഷിലും ചോദ്യങ്ങൾ
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-harvest">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-harvest/10 rounded-full flex items-center justify-center mr-4">
                    <Mic className="w-6 h-6 text-harvest" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    വോയ്സ് ഇൻപുട്ട്
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Speak your questions naturally | സ്വാഭാവികമായി സംസാരിച്ച് ചോദിക്കാം
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-sky">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky/10 rounded-full flex items-center justify-center mr-4">
                    <Camera className="w-6 h-6 text-sky" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    ഇമേജ് അപ്‌ലോഡ്
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Upload plant/crop images for diagnosis | ചെടിയുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യാം
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-earth">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-earth/10 rounded-full flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-earth" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    ലൊക്കേഷൻ സപ്പോർട്ട്
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Kerala district and taluk specific advice | കേരളത്തിലെ ജില്ലകൾക്കനുസരിച്ച്
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    എക്സ്പർട്ട് സഹായം
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Escalate to human experts when needed | ആവശ്യമെങ്കിൽ വിദഗ്ധരുടെ സഹായം
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-harvest">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-harvest/10 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-harvest" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    വിശ്വസനീയം
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Trusted AI-powered agricultural guidance | AI അധിഷ്ഠിത വിശ്വസനീയ മാർഗ്ഗദർശനം
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-harvest/5">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            ഇപ്പോൾ തുടങ്ങാം | Get Started Now
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            നിങ്ങളുടെ കാർഷിക സംശയങ്ങൾ ഇന്നു തന്നെ പരിഹരിക്കാം | 
            Start resolving your farming queries today
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <Link to="/ask">
              <MessageCircle className="w-5 h-5 mr-2" />
              ചോദ്യം ചോദിക്കുക | Ask Your First Query
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};