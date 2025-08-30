-- Create users table for additional user information
CREATE TABLE public.users (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    phone_number TEXT,
    language TEXT DEFAULT 'malayalam',
    district TEXT,
    taluk TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create queries table for user queries
CREATE TABLE public.queries (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    query_text TEXT NOT NULL,
    original_language TEXT DEFAULT 'malayalam',
    crop TEXT,
    issue_type TEXT,
    image_url TEXT,
    district TEXT,
    taluk TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create responses table for AI responses
CREATE TABLE public.responses (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    query_id UUID NOT NULL REFERENCES public.queries(id) ON DELETE CASCADE,
    answer_malayalam TEXT,
    answer_english TEXT,
    tts_audio_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create feedback table for user feedback
CREATE TABLE public.feedback (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    query_id UUID NOT NULL REFERENCES public.queries(id) ON DELETE CASCADE,
    is_helpful BOOLEAN,
    comment TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create crop_diseases table for disease information
CREATE TABLE public.crop_diseases (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    crop TEXT NOT NULL,
    disease_name TEXT NOT NULL,
    symptoms TEXT,
    solution TEXT,
    season TEXT,
    region TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create government_schemes table for schemes information
CREATE TABLE public.government_schemes (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    scheme_name TEXT NOT NULL,
    description TEXT,
    crop TEXT,
    region TEXT,
    eligibility TEXT,
    benefit TEXT,
    official_link TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create weather_forecast table for weather data
CREATE TABLE public.weather_forecast (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    district TEXT NOT NULL,
    date DATE NOT NULL,
    weather TEXT,
    temperature FLOAT,
    rainfall_mm FLOAT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create escalations table for expert escalations
CREATE TABLE public.escalations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    query_id UUID NOT NULL REFERENCES public.queries(id) ON DELETE CASCADE,
    officer_id UUID,
    status TEXT DEFAULT 'pending',
    notes TEXT,
    escalated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    resolved_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crop_diseases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.government_schemes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weather_forecast ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.escalations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for users table
CREATE POLICY "Users can view their own profile" 
ON public.users 
FOR SELECT 
USING (auth.uid() = auth_id);

CREATE POLICY "Users can update their own profile" 
ON public.users 
FOR UPDATE 
USING (auth.uid() = auth_id);

CREATE POLICY "Users can insert their own profile" 
ON public.users 
FOR INSERT 
WITH CHECK (auth.uid() = auth_id);

-- Create RLS policies for queries table
CREATE POLICY "Users can view their own queries" 
ON public.queries 
FOR SELECT 
USING (user_id IN (SELECT id FROM public.users WHERE auth_id = auth.uid()));

CREATE POLICY "Users can create their own queries" 
ON public.queries 
FOR INSERT 
WITH CHECK (user_id IN (SELECT id FROM public.users WHERE auth_id = auth.uid()));

-- Create RLS policies for responses table
CREATE POLICY "Users can view responses to their queries" 
ON public.responses 
FOR SELECT 
USING (query_id IN (
    SELECT q.id FROM public.queries q 
    JOIN public.users u ON q.user_id = u.id 
    WHERE u.auth_id = auth.uid()
));

-- Create RLS policies for feedback table
CREATE POLICY "Users can view their own feedback" 
ON public.feedback 
FOR SELECT 
USING (query_id IN (
    SELECT q.id FROM public.queries q 
    JOIN public.users u ON q.user_id = u.id 
    WHERE u.auth_id = auth.uid()
));

CREATE POLICY "Users can create feedback for their queries" 
ON public.feedback 
FOR INSERT 
WITH CHECK (query_id IN (
    SELECT q.id FROM public.queries q 
    JOIN public.users u ON q.user_id = u.id 
    WHERE u.auth_id = auth.uid()
));

-- Create RLS policies for crop_diseases table (public read access)
CREATE POLICY "Anyone can view crop diseases" 
ON public.crop_diseases 
FOR SELECT 
USING (true);

-- Create RLS policies for government_schemes table (public read access)
CREATE POLICY "Anyone can view government schemes" 
ON public.government_schemes 
FOR SELECT 
USING (true);

-- Create RLS policies for weather_forecast table (public read access)
CREATE POLICY "Anyone can view weather forecast" 
ON public.weather_forecast 
FOR SELECT 
USING (true);

-- Create RLS policies for escalations table
CREATE POLICY "Users can view their own escalations" 
ON public.escalations 
FOR SELECT 
USING (query_id IN (
    SELECT q.id FROM public.queries q 
    JOIN public.users u ON q.user_id = u.id 
    WHERE u.auth_id = auth.uid()
));

CREATE POLICY "Users can create escalations for their queries" 
ON public.escalations 
FOR INSERT 
WITH CHECK (query_id IN (
    SELECT q.id FROM public.queries q 
    JOIN public.users u ON q.user_id = u.id 
    WHERE u.auth_id = auth.uid()
));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates on users table
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_users_auth_id ON public.users(auth_id);
CREATE INDEX idx_queries_user_id ON public.queries(user_id);
CREATE INDEX idx_queries_submitted_at ON public.queries(submitted_at);
CREATE INDEX idx_responses_query_id ON public.responses(query_id);
CREATE INDEX idx_feedback_query_id ON public.feedback(query_id);
CREATE INDEX idx_crop_diseases_crop ON public.crop_diseases(crop);
CREATE INDEX idx_government_schemes_crop ON public.government_schemes(crop);
CREATE INDEX idx_weather_forecast_district_date ON public.weather_forecast(district, date);
CREATE INDEX idx_escalations_query_id ON public.escalations(query_id);