import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Award, Heart, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            ഞങ്ങളെ കുറിച്ച് | About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            കാർഷികരുടെ ജീവിതം മെച്ചപ്പെടുത്താൻ AI ടെക്നോളജി ഉപയോഗിക്കുന്ന ഒരു നൂതന സംരംഭം
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary text-2xl">
              <Target className="w-6 h-6 mr-3" />
              ഞങ്ങളുടെ ലക്ഷ്യം | Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-lg">
              <p className="text-foreground leading-relaxed">
                <strong>മലയാളം:</strong> കേരളത്തിലെ കാർഷികർക്ക് അവരുടെ മാതൃഭാഷയിൽ വിശ്വസനീയവും ശാസ്ത്രീയവുമായ 
                കാർഷിക ഉപദേശം നൽകുക. AI ടെക്നോളജിയുടെ ശക്തി ഉപയോഗിച്ച് ഇന്ത്യൻ കൃഷിയെ ആധുനികവൽക്കരിക്കുകയും 
                കാർഷികരുടെ വരുമാനം വർധിപ്പിക്കുകയും ചെയ്യുക.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>English:</strong> To provide reliable and scientific agricultural guidance to farmers in Kerala 
                in their native language. Using the power of AI technology to modernize Indian agriculture and 
                increase farmers' income.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  AI അധിഷ്ഠിതം
                </h3>
              </div>
              <p className="text-muted-foreground">
                അത്യാധുനിക കൃത്രിമ ബുദ്ധി ഉപയോഗിച്ച് കൃത്യമായ കാർഷിക മാർഗ്ഗനിർദ്ദേശങ്ങൾ | 
                Advanced AI for precise agricultural guidance
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-harvest">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-harvest/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-harvest" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  കാർഷിക സൗഹൃദം
                </h3>
              </div>
              <p className="text-muted-foreground">
                കാർഷികരുടെ ആവശ്യങ്ങൾ മനസ്സിലാക്കി രൂപകൽപ്പന ചെയ്ത ലളിതമായ ഇന്റർഫേസ് | 
                Simple interface designed understanding farmers' needs
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-sky">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky/10 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-sky" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  വിശ്വസനീയം
                </h3>
              </div>
              <p className="text-muted-foreground">
                കാർഷിക വിദഗ്ധരുടെ പിന്തുണയോടെ വികസിപ്പിച്ച വിശ്വസനീയ പ്ലാറ്റ്ഫോം | 
                Trusted platform developed with agricultural experts' support
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Development Team */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary text-2xl">
              <Users className="w-6 h-6 mr-3" />
              വികസന സംഘം | Development Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-foreground mb-2">
                    AI ടെക്നോളജി ടീം
                  </h4>
                  <p className="text-muted-foreground">
                    കൃത്രിമ ബുദ്ധി, മെഷീൻ ലേണിംഗ്, പ്രകൃതിഭാഷാ പ്രോസസ്സിംഗ് വിദഗ്ധർ
                  </p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-foreground mb-2">
                    കാർഷിക വിദഗ്ധർ
                  </h4>
                  <p className="text-muted-foreground">
                    കേരളത്തിലെ പരിചയസമ്പന്നരായ കാർഷിക ശാസ്ത്രജ്ഞരും വിദഗ്ധരും
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-6 p-6 bg-primary/5 rounded-lg">
                <p className="text-foreground font-medium">
                  🇮🇳 ഡിജിറ്റൽ ഇന്ത്യ മിഷന്റെ ഭാഗമായി വികസിപ്പിച്ചത് | 
                  Developed as part of Digital India Mission
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-primary text-2xl">
              <Award className="w-6 h-6 mr-3" />
              നേട്ടങ്ങൾ | Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">കാർഷികർ സഹായിച്ചു | Farmers Helped</p>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-harvest mb-2">95%</div>
                <p className="text-muted-foreground">സംതൃപ്തി നിരക്ക് | Satisfaction Rate</p>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-sky mb-2">24/7</div>
                <p className="text-muted-foreground">ലഭ്യത | Availability</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 shadow-lg bg-gradient-to-r from-primary/5 to-harvest/5">
            <CardContent>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ഇന്നു തന്നെ ആരംഭിക്കാം | Start Today
              </h3>
              <p className="text-muted-foreground mb-6">
                നിങ്ങളുടെ കാർഷിക സംശയങ്ങൾ പരിഹരിക്കാൻ ഞങ്ങൾ തയ്യാറാണ്
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link to="/ask">
                  ചോദ്യം ചോദിക്കുക | Ask Your Question
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};