
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Bot, ArrowRight, User, Paperclip, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Sample responses for demonstration
const aiResponses = {
  greeting: "Hi there! I'm Sofixs AI Assistant. How can I help you today?",
  services: "Sofixs offers a comprehensive range of services including web development, mobile app development, UI/UX design, enterprise software solutions, IoT development, game development, and digital marketing. Would you like specific details about any of these services?",
  careers: "We have multiple job openings across different roles like Software Engineers, UX Designers, Project Managers, and more. You can check our careers page for detailed listings or I can help you find positions that match your skills.",
  technologies: "We work with a variety of technologies including React, Angular, Vue, Node.js, Python, Flutter, React Native, AWS, Azure, Google Cloud, and more. What specific technology are you interested in?",
  contact: "You can reach us through our contact form, by email at contact@sofixs.com, or by phone at +1-800-123-4567. Would you like me to connect you with a team member?",
  default: "I understand you're looking for information. Could you please be a bit more specific so I can provide the most helpful answer? You can ask about our services, technologies, careers, or how to get in touch with us."
};

// Function to generate AI responses
const generateResponse = (message) => {
  message = message.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return aiResponses.greeting;
  } else if (message.includes('service') || message.includes('offer') || message.includes('provide')) {
    return aiResponses.services;
  } else if (message.includes('job') || message.includes('career') || message.includes('work') || message.includes('position') || message.includes('hiring')) {
    return aiResponses.careers;
  } else if (message.includes('technology') || message.includes('tech stack') || message.includes('programming') || message.includes('framework')) {
    return aiResponses.technologies;
  } else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
    return aiResponses.contact;
  } else {
    return aiResponses.default;
  }
};

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi there! I'm your Sofixs AI assistant. How can I help you today?", time: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isAgentConnected, setIsAgentConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [emailForTranscript, setEmailForTranscript] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const userMessage = { 
      sender: 'user', 
      text: inputMessage,
      time: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input field
    setInputMessage('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Process the message and generate a response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      
      if (isAgentConnected) {
        setMessages(prev => [...prev, { 
          sender: 'agent', 
          text: "I'm looking into your question and will provide a solution shortly. Is there anything else you'd like to know?",
          time: new Date()
        }]);
      } else {
        // Generate AI response
        const botResponse = {
          sender: 'bot', 
          text: generateResponse(inputMessage),
          time: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
      }
    }, 1500);
  };

  const connectToAgent = () => {
    setMessages(prev => [...prev, { 
      sender: 'system', 
      text: 'Connecting you to a live support agent...',
      time: new Date()
    }]);
    
    // Simulate agent joining after a short delay
    setTimeout(() => {
      setIsAgentConnected(true);
      setMessages(prev => [...prev, { 
        sender: 'agent', 
        text: "Hello! I'm Sarah from Sofixs. I'll be helping you today. How can I assist you?",
        time: new Date()
      }]);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendTranscript = () => {
    // In a real implementation, this would send the chat transcript to the provided email
    setShowEmailInput(false);
    setMessages(prev => [...prev, { 
      sender: 'system', 
      text: `Chat transcript will be sent to ${emailForTranscript} shortly.`,
      time: new Date()
    }]);
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <button 
        onClick={toggleChat}
        className="bg-tech-blue text-white p-4 rounded-full shadow-lg hover:bg-tech-darkblue transition-colors duration-300 flex items-center justify-center"
        aria-label="Customer Support Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className={`absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-200 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[480px]'}`}>
          {/* Chat header */}
          <div className="bg-tech-blue text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              {isAgentConnected ? (
                <div className="w-8 h-8 rounded-full bg-white mr-3 flex items-center justify-center">
                  <span className="font-bold text-tech-blue">S</span>
                </div>
              ) : (
                <Bot className="mr-2" size={20} />
              )}
              <div>
                <h3 className="font-medium">
                  {isAgentConnected ? 'Sarah - Support Agent' : 'Sofixs AI Assistant'}
                </h3>
                <p className="text-xs opacity-90">
                  {isAgentConnected ? 'Online' : 'Ready to help 24/7'}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              {!isMinimized && (
                <button 
                  onClick={minimizeChat}
                  className="text-white hover:text-gray-200 mr-2"
                  aria-label="Minimize chat"
                >
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Chat messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender !== 'user' && message.sender !== 'system' && (
                      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mr-2 ${
                        message.sender === 'bot' 
                          ? 'bg-tech-lightblue text-tech-blue' 
                          : 'bg-tech-orange text-white'
                      }`}>
                        {message.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
                      </div>
                    )}
                    
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-tech-blue text-white rounded-tr-none' 
                          : message.sender === 'agent'
                            ? 'bg-tech-orange text-white rounded-tl-none'
                            : message.sender === 'system'
                              ? 'bg-gray-200 text-gray-700 mx-auto max-w-[90%] text-center text-sm'
                              : 'bg-gray-200 text-gray-700 rounded-tl-none'
                      }`}
                    >
                      {message.text}
                      <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {formatTime(message.time)}
                      </div>
                    </div>
                    
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-tech-blue flex items-center justify-center ml-2">
                        <User size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-700 rounded-lg p-3 max-w-[80%] rounded-tl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Email for transcript */}
              {showEmailInput && (
                <div className="bg-white p-3 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={emailForTranscript}
                      onChange={(e) => setEmailForTranscript(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={sendTranscript} size="sm" className="bg-tech-orange hover:bg-opacity-90">
                      Send
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Quick actions */}
              <div className="bg-white p-2 border-t border-gray-200 flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs border-gray-300 hover:bg-gray-100"
                  onClick={() => {
                    setInputMessage("What services do you offer?");
                    setTimeout(sendMessage, 100);
                  }}
                >
                  Services
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs border-gray-300 hover:bg-gray-100"
                  onClick={() => {
                    setInputMessage("How can I contact your team?");
                    setTimeout(sendMessage, 100);
                  }}
                >
                  Contact
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs border-gray-300 hover:bg-gray-100"
                  onClick={() => {
                    setInputMessage("Are you hiring?");
                    setTimeout(sendMessage, 100);
                  }}
                >
                  Careers
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs border-gray-300 hover:bg-gray-100"
                  onClick={() => setShowEmailInput(!showEmailInput)}
                >
                  Transcript
                </Button>
              </div>
              
              {/* Connect to agent button */}
              {!isAgentConnected && (
                <div className="bg-gray-50 p-2 border-t border-gray-200">
                  <Button 
                    onClick={connectToAgent}
                    className="w-full bg-tech-orange text-white hover:bg-opacity-90 text-sm"
                  >
                    Connect to Live Agent
                  </Button>
                </div>
              )}
              
              {/* Chat input */}
              <div className="p-3 border-t border-gray-200 flex">
                <Textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 resize-none h-10 py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                  rows={1}
                />
                <div className="flex">
                  <button
                    className="bg-gray-200 text-gray-600 p-2 hover:bg-gray-300 transition-colors border-y border-gray-300"
                    aria-label="Attach files"
                  >
                    <Paperclip size={20} />
                  </button>
                  <button
                    onClick={sendMessage}
                    className="bg-tech-blue text-white p-2 rounded-r-md hover:bg-tech-darkblue transition-colors"
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatSupport;
