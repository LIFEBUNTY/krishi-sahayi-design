import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Camera, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const AskQuery = () => {
  const [query, setQuery] = useState('');
  const [district, setDistrict] = useState('');
  const [taluk, setTaluk] = useState('');
  const [crop, setCrop] = useState('');
  const [problemType, setProblemType] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const keralaDistricts = [
    'തിരുവനന്തപുരം | Thiruvananthapuram',
    'കൊല്ലം | Kollam',
    'പത്തനംതിട്ട | Pathanamthitta',
    'ആലപ്പുഴ | Alappuzha',
    'കോട്ടയം | Kottayam',
    'ഇടുക്കി | Idukki',
    'എറണാകുളം | Ernakulam',
    'തൃശ്ശൂർ | Thrissur',
    'പാലക്കാട് | Palakkad',
    'മലപ്പുറം | Malappuram',
    'കോഴിക്കോട് | Kozhikode',
    'വയനാട് | Wayanad',
    'കണ്ണൂർ | Kannur',
    'കാസർഗോഡ് | Kasaragod'
  ];

  const commonCrops = [
    'നെൽ | Rice',
    'തേങ്ങ് | Coconut',
    'കുരുമുളക് | Black Pepper',
    'ഏലം | Cardamom',
    'റബ്ബർ | Rubber',
    'കാപ്പി | Coffee',
    'വാഴ | Banana',
    'കശുമാവ് | Cashew',
    'പച്ചക്കറികൾ | Vegetables',
    'മറ്റുള്ളവ | Others'
  ];

  const problemTypes = [
    'രോഗങ്ങൾ | Diseases',
    'പൂച്ചികൾ | Pests',
    'മണ്ണിന്റെ പ്രശ്നങ്ങൾ | Soil Issues',
    'വളം | Fertilizers',
    'വിത്ത് | Seeds',
    'കാലാവസ്ഥ | Weather',
    'മാർക്കറ്റിംഗ് | Marketing',
    'മറ്റുള്ളവ | Others'
  ];

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Voice recording implementation would go here
    toast({
      title: "വോയ്സ് റെക്കോർഡിംഗ്",
      description: isRecording ? "റെക്കോർഡിംഗ് നിർത്തി" : "റെക്കോർഡിംഗ് ആരംഭിച്ചു",
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      toast({
        title: "ഇമേജ് അപ്‌ലോഡ്",
        description: "ഫോട്ടോ വിജയകരമായി അപ്‌ലോഡ് ചെയ്തു",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "ചോദ്യം ആവശ്യമാണ്",
        description: "ദയവായി നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക",
        variant: "destructive"
      });
      return;
    }

    // Store query data for the response page
    const queryData = {
      query,
      district,
      taluk,
      crop,
      problemType,
      uploadedImage: uploadedImage?.name || null
    };
    
    localStorage.setItem('currentQuery', JSON.stringify(queryData));
    navigate('/response');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            ചോദ്യം ചോദിക്കുക | Ask Your Query
          </h1>
          <p className="text-muted-foreground">
            നിങ്ങളുടെ കാർഷിക സംശയങ്ങൾ വിശദമായി എഴുതുക | Share your farming questions in detail
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <MapPin className="w-5 h-5 mr-2" />
              ചോദ്യ വിവരങ്ങൾ | Query Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Location Selection */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="district">ജില്ല | District</Label>
                  <Select value={district} onValueChange={setDistrict}>
                    <SelectTrigger>
                      <SelectValue placeholder="ജില്ല തിരഞ്ഞെടുക്കുക | Select District" />
                    </SelectTrigger>
                    <SelectContent>
                      {keralaDistricts.map((dist) => (
                        <SelectItem key={dist} value={dist}>{dist}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="taluk">താലൂക് | Taluk</Label>
                  <Input
                    id="taluk"
                    value={taluk}
                    onChange={(e) => setTaluk(e.target.value)}
                    placeholder="താലൂക് പേര് | Enter taluk name"
                  />
                </div>
              </div>

              {/* Crop and Problem Type */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="crop">വിള | Crop</Label>
                  <Select value={crop} onValueChange={setCrop}>
                    <SelectTrigger>
                      <SelectValue placeholder="വിള തിരഞ്ഞെടുക്കുക | Select Crop" />
                    </SelectTrigger>
                    <SelectContent>
                      {commonCrops.map((cropItem) => (
                        <SelectItem key={cropItem} value={cropItem}>{cropItem}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="problem">പ്രശ്ന തരം | Problem Type</Label>
                  <Select value={problemType} onValueChange={setProblemType}>
                    <SelectTrigger>
                      <SelectValue placeholder="പ്രശ്ന തരം | Select Problem Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {problemTypes.map((problem) => (
                        <SelectItem key={problem} value={problem}>{problem}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Query Input */}
              <div className="space-y-2">
                <Label htmlFor="query">നിങ്ങളുടെ ചോദ്യം | Your Question *</Label>
                <Textarea
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="നിങ്ങളുടെ കാർഷിക സംശയം വിശദമായി എഴുതുക... | Write your farming question in detail..."
                  className="min-h-32 text-base"
                  required
                />
              </div>

              {/* Voice Input and Image Upload */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleVoiceInput}
                  className={`flex-1 ${isRecording ? 'bg-destructive/10 border-destructive text-destructive' : ''}`}
                >
                  <Mic className={`w-4 h-4 mr-2 ${isRecording ? 'animate-pulse' : ''}`} />
                  {isRecording ? 'റെക്കോർഡിംഗ് നിർത്താം' : 'വോയ്സ് ഇൻപുട്ട് | Voice Input'}
                </Button>
                
                <div className="flex-1">
                  <Label htmlFor="image-upload" className="cursor-pointer">
                    <div className="flex items-center justify-center border-2 border-dashed border-border rounded-md p-4 hover:border-primary transition-colors">
                      <Camera className="w-4 h-4 mr-2" />
                      {uploadedImage ? 'ഫോട്ടോ അപ്‌ലോഡ് ചെയ്തു' : 'ഫോട്ടോ അപ്‌ലോഡ് | Upload Photo'}
                    </div>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                <Send className="w-4 h-4 mr-2" />
                ചോദ്യം അയയ്ക്കുക | Submit Query
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};