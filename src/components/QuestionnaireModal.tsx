import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Users, Trophy, Heart } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; points: { base: number; intermedio: number; avanzato: number } }[];
}

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual è il tuo livello di esperienza con l'allenamento?",
    options: [
      { value: "beginner", label: "Principiante - Non mi alleno mai o raramente", points: { base: 3, intermedio: 1, avanzato: 0 } },
      { value: "intermediate", label: "Intermedio - Mi alleno 2-3 volte a settimana", points: { base: 1, intermedio: 3, avanzato: 1 } },
      { value: "advanced", label: "Avanzato - Mi alleno 4+ volte a settimana", points: { base: 0, intermedio: 1, avanzato: 3 } }
    ]
  },
  {
    id: 2,
    question: "Quanto tempo puoi dedicare all'allenamento a settimana?",
    options: [
      { value: "3hours", label: "3-4 ore (3 allenamenti)", points: { base: 3, intermedio: 1, avanzato: 0 } },
      { value: "5hours", label: "5-6 ore (4 allenamenti)", points: { base: 1, intermedio: 3, avanzato: 1 } },
      { value: "7hours", label: "7+ ore (5+ allenamenti)", points: { base: 0, intermedio: 1, avanzato: 3 } }
    ]
  },
  {
    id: 3,
    question: "Hai mai seguito una dieta personalizzata?",
    options: [
      { value: "never", label: "No, mai", points: { base: 3, intermedio: 1, avanzato: 0 } },
      { value: "sometimes", label: "Sì, qualche volta", points: { base: 1, intermedio: 3, avanzato: 1 } },
      { value: "always", label: "Sì, seguo sempre piani nutrizionali", points: { base: 0, intermedio: 1, avanzato: 3 } }
    ]
  },
  {
    id: 4,
    question: "Quanto supporto personalizzato desideri?",
    options: [
      { value: "basic", label: "Supporto base via WhatsApp", points: { base: 3, intermedio: 1, avanzato: 0 } },
      { value: "consultation", label: "Qualche consulenza 1-a-1", points: { base: 1, intermedio: 3, avanzato: 1 } },
      { value: "full", label: "Supporto completo e personalizzato", points: { base: 0, intermedio: 1, avanzato: 3 } }
    ]
  }
];

const recommendations = {
  base: {
    title: "Protocollo Base",
    description: "Perfetto per iniziare il tuo percorso fitness",
    price: "€25",
    icon: Users,
    features: ["6 settimane di allenamento", "3 giorni a settimana", "Tracking progressi", "Supporto WhatsApp"],
    badge: "Principianti"
  },
  intermedio: {
    title: "Protocollo Intermedio", 
    description: "Ideale per chi vuole un supporto più completo",
    price: "€50",
    icon: Trophy,
    features: ["6 settimane", "4 volte a settimana", "Consulenza dietologo 1-on-1", "Consulenza personal trainer 1-on-1", "Tracking progressi", "Supporto WhatsApp"],
    badge: "Più Completo"
  },
  avanzato: {
    title: "Protocollo Avanzato",
    description: "Per chi cerca la massima personalizzazione",
    price: "€99", 
    icon: Heart,
    features: ["12 settimane", "5 allenamenti a settimana", "Dieta personalizzata con dietologo", "Programma personalizzato con personal trainer", "Consulenze 1-on-1", "Tracking progressi", "Assistenza WhatsApp"],
    badge: "Premium"
  }
};

export function QuestionnaireModal({ isOpen, onClose }: QuestionnaireModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleAnswer = (value: string) => {
    setSelectedOption(value);
  };

  const nextQuestion = () => {
    if (selectedOption) {
      setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: selectedOption }));
      setSelectedOption("");
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResult();
      }
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[questions[currentQuestion - 1].id] || "");
    }
  };

  const calculateResult = () => {
    const scores = { base: 0, intermedio: 0, avanzato: 0 };
    
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const option = question?.options.find(opt => opt.value === answer);
      
      if (option) {
        scores.base += option.points.base;
        scores.intermedio += option.points.intermedio;
        scores.avanzato += option.points.avanzato;
      }
    });

    setShowResult(true);
  };

  const getRecommendedPlan = () => {
    const scores = { base: 0, intermedio: 0, avanzato: 0 };
    
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const option = question?.options.find(opt => opt.value === answer);
      
      if (option) {
        scores.base += option.points.base;
        scores.intermedio += option.points.intermedio;
        scores.avanzato += option.points.avanzato;
      }
    });

    const maxScore = Math.max(scores.base, scores.intermedio, scores.avanzato);
    
    if (maxScore === scores.base) return 'base';
    if (maxScore === scores.intermedio) return 'intermedio';
    return 'avanzato';
  };

  const resetQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setSelectedOption("");
  };

  const handleClose = () => {
    resetQuestionnaire();
    onClose();
  };

  if (showResult) {
    const recommendedPlan = getRecommendedPlan();
    const plan = recommendations[recommendedPlan as keyof typeof recommendations];
    const Icon = plan.icon;

    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Il Tuo Piano Consigliato</DialogTitle>
          </DialogHeader>
          
          <div className="py-6">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <Badge variant="outline" className="mb-4">{plan.badge}</Badge>
                <h3 className="text-3xl font-bold mb-2">{plan.title}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-primary mb-6">{plan.price}</div>
                
                <div className="space-y-2 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button onClick={resetQuestionnaire} variant="outline" className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Rifai il Test
                  </Button>
                  <Button onClick={handleClose} className="flex-1">
                    Inizia Ora
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Trova il Piano Perfetto per Te
          </DialogTitle>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentQuestion ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogHeader>
        
        <div className="py-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Domanda {currentQuestion + 1} di {questions.length}
            </h3>
            <p className="text-lg">{questions[currentQuestion].question}</p>
          </div>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <Card
                key={option.value}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedOption === option.value 
                    ? 'ring-2 ring-primary bg-primary/5' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => handleAnswer(option.value)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedOption === option.value 
                        ? 'bg-primary border-primary' 
                        : 'border-muted-foreground'
                    }`} />
                    <span className="font-medium">{option.label}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={prevQuestion} 
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Indietro
            </Button>
            <Button 
              onClick={nextQuestion} 
              disabled={!selectedOption}
            >
              {currentQuestion === questions.length - 1 ? 'Vedi Risultato' : 'Avanti'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}