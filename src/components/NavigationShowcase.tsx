import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NavigationBubble from "@/components/layout/NavigationBubble";
import NavigationMorphing from "@/components/layout/NavigationMorphing";
import NavigationOrbital from "@/components/layout/NavigationOrbital";
import NavigationMagnetic from "@/components/layout/NavigationMagnetic";

interface NavigationOption {
  id: string;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  uxScore: number;
  creativity: number;
  usability: number;
  recommended?: boolean;
}

const NavigationShowcase = () => {
  const [selectedNav, setSelectedNav] = useState<string>('bubble');
  const [darkMode, setDarkMode] = useState(false);

  const navigationOptions: NavigationOption[] = [
    {
      id: 'bubble',
      name: 'Floating Bubble Navigation',
      description: 'Playful floating navigation with bubble effects and magnetic hover interactions',
      pros: [
        'Eye-catching and memorable',
        'Smooth hover animations',
        'Space-efficient floating design',
        'Magnetic particle effects'
      ],
      cons: [
        'May distract from content',
        'Less conventional for business sites',
        'Fixed positioning limits flexibility'
      ],
      uxScore: 8.2,
      creativity: 9.5,
      usability: 7.8
    },
    {
      id: 'morphing',
      name: 'Morphing Bar Navigation',
      description: 'Dynamic navigation with morphing background indicators and smooth transitions',
      pros: [
        'Clear visual feedback',
        'Professional appearance',
        'Excellent hover states',
        'Great for portfolios'
      ],
      cons: [
        'Complex animation may cause performance issues',
        'Requires more testing across devices'
      ],
      uxScore: 9.1,
      creativity: 8.7,
      usability: 9.3,
      recommended: true
    },
    {
      id: 'orbital',
      name: 'Orbital Navigation',
      description: 'Unique orbital-themed navigation with circular patterns and space-like effects',
      pros: [
        'Highly unique and memorable',
        'Fits tech/space themes perfectly',
        'Engaging visual metaphor',
        'Great conversation starter'
      ],
      cons: [
        'May confuse users initially',
        'Not suitable for all industries',
        'Complex layout on smaller screens'
      ],
      uxScore: 7.5,
      creativity: 9.8,
      usability: 6.9
    },
    {
      id: 'magnetic',
      name: 'Minimalist Magnetic Navigation',
      description: 'Clean, minimal design with subtle magnetic effects and smooth interactions',
      pros: [
        'Highest usability score',
        'Works for any industry',
        'Excellent accessibility',
        'Fast loading',
        'Professional and clean'
      ],
      cons: [
        'Less visually striking',
        'May be too subtle for some brands'
      ],
      uxScore: 9.4,
      creativity: 7.2,
      usability: 9.7
    }
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const getCurrentNavComponent = () => {
    const props = { darkMode, toggleDarkMode };
    switch (selectedNav) {
      case 'bubble':
        return <NavigationBubble {...props} />;
      case 'morphing':
        return <NavigationMorphing {...props} />;
      case 'orbital':
        return <NavigationOrbital {...props} />;
      case 'magnetic':
        return <NavigationMagnetic {...props} />;
      default:
        return <NavigationMorphing {...props} />;
    }
  };

  const recommended = navigationOptions.find(nav => nav.recommended);

  return (
    <div className="min-h-screen bg-background">
      {/* Current Navigation Demo */}
      <div className="relative">
        {getCurrentNavComponent()}
        
        {/* Demo Content */}
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Navigation Design Showcase</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience 4 unique navigation designs. Each offers different aesthetics and user experiences.
              </p>
            </div>

            {/* Navigation Options Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {navigationOptions.map((nav) => (
                <Card 
                  key={nav.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedNav === nav.id ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedNav(nav.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{nav.name}</CardTitle>
                      {nav.recommended && (
                        <Badge variant="default" className="text-xs">
                          Recommended
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm">
                      {nav.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Scores */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>UX Score:</span>
                        <span className="font-semibold text-primary">{nav.uxScore}/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Creativity:</span>
                        <span className="font-semibold">{nav.creativity}/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Usability:</span>
                        <span className="font-semibold">{nav.usability}/10</span>
                      </div>
                    </div>

                    {/* Pros */}
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-green-600 mb-1">Pros:</h4>
                      <ul className="text-xs space-y-1">
                        {nav.pros.slice(0, 2).map((pro, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-green-500 rounded-full mr-2" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="text-sm font-semibold text-orange-600 mb-1">Cons:</h4>
                      <ul className="text-xs space-y-1">
                        {nav.cons.slice(0, 1).map((con, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-orange-500 rounded-full mr-2" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* UX Recommendation */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏆 UX Expert Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    <strong>Recommended: {recommended?.name}</strong> - This design strikes the perfect balance between 
                    creativity and usability, making it ideal for professional portfolios and business websites.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Best for Business/Professional:</h4>
                      <p className="text-muted-foreground">Morphing Bar or Minimalist Magnetic</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Best for Creative Portfolios:</h4>
                      <p className="text-muted-foreground">Floating Bubble or Orbital</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      <strong>Performance Note:</strong> All designs are optimized for smooth 60fps animations and include 
                      mobile-responsive layouts with accessibility considerations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Demo Sections */}
            <div className="space-y-32 mt-32">
              <section id="home" className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Home Section</h2>
                <p className="text-muted-foreground">Try clicking the navigation items above to see smooth scrolling in action!</p>
              </section>
              
              <section id="about" className="py-20 text-center bg-muted/20 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">About Section</h2>
                <p className="text-muted-foreground">Each navigation design maintains the same functionality with unique visual appeal.</p>
              </section>
              
              <section id="services" className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Services Section</h2>
                <p className="text-muted-foreground">Notice how the active states and hover effects differ between designs.</p>
              </section>
              
              <section id="clients" className="py-20 text-center bg-muted/20 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">Clients Section</h2>
                <p className="text-muted-foreground">All designs are fully responsive and work seamlessly on mobile devices.</p>
              </section>
              
              <section id="blog" className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Blog Section</h2>
                <p className="text-muted-foreground">Choose the design that best matches your brand personality and user expectations.</p>
              </section>
              
              <section id="contact" className="py-20 text-center bg-muted/20 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">Contact Section</h2>
                <p className="text-muted-foreground">Ready to implement your chosen navigation design?</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationShowcase;