import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Volume2, ThumbsUp, ThumbsDown, Users, Languages, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QueryData {
  query: string;
  district: string;
  taluk: string;
  crop: string;
  problemType: string;
  uploadedImage: string | null;
}

export const QueryResponse = () => {
  const [queryData, setQueryData] = useState<QueryData | null>(null);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const savedQuery = localStorage.getItem('currentQuery');
    if (savedQuery) {
      setQueryData(JSON.parse(savedQuery));
    } else {
      navigate('/ask');
    }
  }, [navigate]);

  const aiResponse = {
    malayalam: `നിങ്ങളുടെ ${queryData?.crop ? queryData.crop.split('|')[0].trim() : 'വിള'}യിലെ പ്രശ്നം സാധാരണ ${queryData?.problemType ? queryData.problemType.split('|')[0].trim() : 'കാർഷിക പ്രശ്നം'} ആയിരിക്കാം. 

പരിഹാരം:
1. ആദ്യം ചെടിയുടെ ഇലകൾ ശ്രദ്ധാപൂർവ്വം പരിശോധിക്കുക
2. മണ്ണിന്റെ ഈർപ്പം ശരിയായ അളവിൽ ഉണ്ടെന്ന് ഉറപ്പാക്കുക
3. ജൈവ വളം ഉപയോഗിച്ച് മണ്ണിന്റെ ഗുണനിലവാരം മെച്ചപ്പെടുത്തുക
4. പ്രാദേശിക കാർഷിക ഓഫീസറുമായി ബന്ധപ്പെടുക

${queryData?.district ? `${queryData.district.split('|')[0].trim()} ജില്ലയിലെ കാലാവസ്ഥ കണക്കിലെടുത്ത് ഈ ആഴ്ച പ്രത്യേക ശ്രദ്ധ വേണം.` : ''}

കൂടുതൽ സഹായത്തിന് കൃഷി വിദഗ്ധരുമായി ബന്ധപ്പെടാവുന്നതാണ്.`,

    english: `Based on your query about ${queryData?.crop ? queryData.crop.split('|')[1]?.trim() : 'your crop'}, this appears to be a common ${queryData?.problemType ? queryData.problemType.split('|')[1]?.trim().toLowerCase() : 'agricultural issue'}.

Solution:
1. First, carefully examine the plant leaves for any symptoms
2. Ensure proper soil moisture levels are maintained
3. Use organic fertilizers to improve soil quality
4. Contact your local agricultural officer for guidance

${queryData?.district ? `For ${queryData.district.split('|')[1]?.trim()} district conditions, special attention is needed this week.` : ''}

For further assistance, you can escalate this to agricultural experts.`
  };

  const handleTextToSpeech = () => {
    setIsPlaying(!isPlaying);
    const text = isEnglish ? aiResponse.english : aiResponse.malayalam;
    
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = isEnglish ? 'en-IN' : 'ml-IN';
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      toast({
        title: "സാങ്കേതിക പ്രശ്നം",
        description: "ഈ ബ്രൗസറിൽ ഓഡിയോ പ്ലേബാക്ക് പിന്തുണയില്ല",
        variant: "destructive"
      });
    }
  };

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    toast({
      title: "ഫീഡ്ബാക്ക് സ്വീകരിച്ചു",
      description: type === 'helpful' ? "നന്ദി! നിങ്ങളുടെ ഫീഡ്ബാക്ക് സഹായകരമാണ്" : "ക്ഷമിക്കണം. ഞങ്ങൾ മെച്ചപ്പെടുത്താൻ ശ്രമിക്കും",
    });
  };

  const handleEscalateToExpert = () => {
    toast({
      title: "വിദഗ്ധരുടെ സഹായം",
      description: "നിങ്ങളുടെ ചോദ്യം കാർഷിക വിദഗ്ധരിലേക്ക് കൈമാറി. ഉടൻ മറുപടി ലഭിക്കും",
    });
  };

  if (!queryData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => navigate('/ask')} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            പിന്നോട്ട് | Back
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            AI മറുപടി | AI Response
          </h1>
        </div>

        {/* Query Details */}
        <Card className="mb-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary">നിങ്ങളുടെ ചോദ്യം | Your Query</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-foreground font-medium">{queryData.query}</p>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                {queryData.district && (
                  <div><strong>ജില്ല:</strong> {queryData.district}</div>
                )}
                {queryData.crop && (
                  <div><strong>വിള:</strong> {queryData.crop}</div>
                )}
                {queryData.problemType && (
                  <div><strong>പ്രശ്ന തരം:</strong> {queryData.problemType}</div>
                )}
                {queryData.uploadedImage && (
                  <div><strong>അപ്‌ലോഡ് ചെയ്ത ഫോട്ടോ:</strong> {queryData.uploadedImage}</div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Response */}
        <Card className="mb-6 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-primary">AI മറുപടി | AI Response</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEnglish(!isEnglish)}
              >
                <Languages className="w-4 h-4 mr-2" />
                {isEnglish ? 'മലയാളം' : 'English'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="prose prose-green max-w-none">
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {isEnglish ? aiResponse.english : aiResponse.malayalam}
                </p>
              </div>
              
              <Separator />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  onClick={handleTextToSpeech}
                  className="flex-1"
                >
                  <Volume2 className={`w-4 h-4 mr-2 ${isPlaying ? 'animate-pulse' : ''}`} />
                  {isPlaying ? 'നിർത്തുക | Stop' : 'കേട്ടുനോക്കുക | Listen'}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleEscalateToExpert}
                  className="flex-1"
                >
                  <Users className="w-4 h-4 mr-2" />
                  വിദഗ്ധരുടെ സഹായം | Expert Help
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary">ഫീഡ്ബാക്ക് | Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                ഈ മറുപടി സഹായകരമായിരുന്നോ? | Was this response helpful?
              </p>
              
              <div className="flex gap-4">
                <Button
                  variant={feedback === 'helpful' ? 'default' : 'outline'}
                  onClick={() => handleFeedback('helpful')}
                  className="flex-1"
                  disabled={feedback !== null}
                >
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  സഹായകരം | Helpful
                </Button>
                
                <Button
                  variant={feedback === 'not-helpful' ? 'destructive' : 'outline'}
                  onClick={() => handleFeedback('not-helpful')}
                  className="flex-1"
                  disabled={feedback !== null}
                >
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  സഹായകരമല്ല | Not Helpful
                </Button>
              </div>
              
              {feedback && (
                <p className="text-center text-muted-foreground">
                  നന്ദി! നിങ്ങളുടെ ഫീഡ്ബാക്ക് സ്വീകരിച്ചു | Thank you for your feedback!
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/ask">
              പുതിയ ചോദ്യം | Ask Another Query
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};