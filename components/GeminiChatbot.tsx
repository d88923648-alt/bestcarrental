import React, { useState, useRef, useEffect, useCallback } from 'react';
import { generateGeminiResponse } from '../services/geminiService';
import { GeminiMessage } from '../types';
import { LoadingSpinner } from './LoadingSpinner';
import { useThemeConfig } from '../context/ThemeConfigContext';
import { useCompanyInfo } from '../context/CompanyInfoContext';

export const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<GeminiMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { themeConfig } = useThemeConfig();
  const { companyInfo } = useCompanyInfo();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() === '' || isLoading) return;

    const userMessage: GeminiMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await generateGeminiResponse(input);
      setMessages((prev) => [...prev, { text: aiResponse, isUser: false }]);
    } catch (error) {
      console.error('Failed to get Gemini response:', error);
      setMessages((prev) => [...prev, { text: 'Sorry, something went wrong. Please try again!', isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg text-white z-[100] transition-transform duration-300 transform hover:scale-110"
        style={{ backgroundColor: themeConfig.primaryColor }}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 w-full max-w-sm bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-[100]"
          style={{ height: '70vh', fontFamily: themeConfig.bodyFont }}
        >
          {/* Chat Header */}
          <div
            className="flex items-center justify-between p-4 rounded-t-lg shadow-sm"
            style={{ backgroundColor: themeConfig.primaryColor, color: themeConfig.bgColor }}
          >
            <h3 className="text-lg font-semibold">Chat with {companyInfo.companyName} AI</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4" style={{ backgroundColor: themeConfig.bgColor }}>
            <div className="flex justify-start">
              <div
                className="bg-gray-200 p-3 rounded-lg max-w-[80%]"
                style={{ color: themeConfig.textColor }}
              >
                Hi there! I'm your AI assistant from {companyInfo.companyName}. How can I help you today?
              </div>
            </div>
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.isUser
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200'
                  }`}
                  style={!msg.isUser ? { color: themeConfig.textColor } : {}}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="p-3">
                  <LoadingSpinner />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: themeConfig.primaryColor }}
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
