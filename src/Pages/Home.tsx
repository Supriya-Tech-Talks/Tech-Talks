import { useEffect, useState, useRef } from "react";
import "../App.css";

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'ai', message: string}>>([]);
  const conversationEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (conversationEndRef.current && conversation.length > 0) {
      conversationEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [conversation, isLoading]);

  useEffect(() => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`;
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = message.trim();
    if (!userMessage) return;

    setConversation(prev => [...prev, { type: 'user', message: userMessage }]);
    setMessage("");
    setIsFocused(false);
    setIsLoading(true);
    setError("");

    try {
      const webhookUrl = "https://n8n.srv954053.hstgr.cloud/webhook/prayog-search-ai";
      const fetchResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          query: userMessage,
        }),
      });

      if (!fetchResponse.ok) {
        throw new Error(`HTTP error! status: ${fetchResponse.status}`);
      }

      const data = await fetchResponse.json();
      
      let aiResponse = "";
      
      if (data.output) {
        aiResponse = typeof data.output === 'string' ? data.output : JSON.stringify(data.output);
      } else if (data.response) {
        aiResponse = typeof data.response === 'string' ? data.response : JSON.stringify(data.response);
      } else if (data.message) {
        aiResponse = typeof data.message === 'string' ? data.message : JSON.stringify(data.message);
      } else if (data.text) {
        aiResponse = typeof data.text === 'string' ? data.text : JSON.stringify(data.text);
      } else if (data.answer) {
        aiResponse = typeof data.answer === 'string' ? data.answer : JSON.stringify(data.answer);
      } else if (typeof data === 'string') {
        aiResponse = data;
      } else {
        const stringValues = Object.values(data).filter(v => typeof v === 'string');
        aiResponse = stringValues.length > 0 ? stringValues[0] as string : "I received your message, but couldn't parse the response format.";
      }
      
      setConversation(prev => [...prev, { type: 'ai', message: aiResponse }]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to get response from AI";
      setError(errorMessage);
      console.error("Webhook error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col">
      {!conversation.length && message.length <= 50 && (
        <div className="flex flex-col justify-center items-center py-8 mt-10">
          <div className="mb-6 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center gap-2 w-fit mx-auto">
            <span>New Claude Opus 4.5 in Tech talks</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 flex items-center justify-center gap-3 flex-wrap max-w-[1200px] mx-auto leading-tight">
            <span>Build something</span>
            <span className="text-white">Tech Talks</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">Create apps and websites by chatting with AI</p>
        </div>
      )}

      {conversation.length > 0 && (
        <div className="w-full max-w-4xl mx-auto mb-6 flex-1 flex flex-col min-h-0 conversation-container max-h-[500px]">
          <div className="flex-1 rounded-2xl bg-slate-800/60 dark:bg-slate-900/50 p-6 shadow-xl border border-white/25 backdrop-blur-md space-y-4 overflow-y-auto max-h-[500px]">
            {conversation.map((item, index) => (
              <div key={index} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] rounded-2xl px-5 py-3.5 ${
                  item.type === 'user'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/90 text-white shadow-lg'
                }`}>
                  <p className="text-base whitespace-pre-wrap break-words leading-relaxed">{item.message}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700/90 text-white rounded-2xl px-5 py-3.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-typing-dot typing-dot-1"></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-typing-dot typing-dot-2"></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-typing-dot typing-dot-3"></span>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-start">
                <div className="bg-red-600/90 text-white rounded-2xl px-5 py-3.5 shadow-lg">
                  <p className="text-sm">Error: {error}</p>
                </div>
              </div>
            )}
            <div ref={conversationEndRef} />
          </div>
        </div>
      )}

      <div className={`w-full ${conversation.length > 0 ? 'max-w-4xl' : 'max-w-3xl'} mx-auto ${conversation.length > 0 ? 'mt-8 mb-8' : 'mt-40 mb-8'}`}>
        <form onSubmit={handleSubmit} className={`relative ${conversation.length > 0 ? 'sticky top-20 z-40' : ''}`}>
          <div className={`rounded-2xl bg-slate-800/80 dark:bg-slate-900/70 p-5 shadow-2xl border backdrop-blur-md text-left transition-all duration-300 ${
            isFocused 
              ? "border-blue-500/50 shadow-blue-500/20 shadow-2xl scale-[1.01]" 
              : "border-white/25"
          }`}>
            <div className="flex items-end gap-3">
              <div className="flex items-center gap-2 flex-shrink-0">
                <button type="button" aria-label="Voice assistant" className="px-3 py-3 mb-3 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200 hover:scale-110 active:scale-95">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 relative">
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setIsTyping(true);
                    const timer = setTimeout(() => setIsTyping(false), 500);
                    return () => clearTimeout(timer);
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={handleKeyDown}
                  placeholder="tech talks to create a dashboard"
                  rows={1}
                  className="w-full bg-transparent text-white placeholder:text-white/40 placeholder:font-normal outline-none text-base pr-10 resize-none max-h-32 min-h-[3rem] leading-6 message-textarea py-4"
                />
                {isTyping && (
                  <span className="absolute right-3 top-3 flex items-center gap-1 pointer-events-none">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-typing-dot typing-dot-1"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-typing-dot typing-dot-2"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-typing-dot typing-dot-3"></span>
                  </span>
                )}
                {isFocused && !isTyping && message.length === 0 && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-blue-500 animate-cursor-blink pointer-events-none"></span>
                )}
              </div>
              <button 
                type="submit"
                disabled={!message.trim() || isLoading}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 mt-1 flex-shrink-0 ${
                  message.trim() && !isLoading
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30"
                    : "bg-white/5 text-white/40 cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2 mb-1">
                    <span>Send</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
          {isFocused && (
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl -z-10 animate-pulse-slow"></div>
          )}
        </form>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-40 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Tech Talks</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Our approach to delivering exceptional results</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-xl card-animate-1 group flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Intelligent Solutions</h3>
            <p className="text-white/70 text-sm leading-relaxed">Smart AI-powered solutions crafted for your unique business challenges</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-xl card-animate-2 group flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Rapid Development</h3>
            <p className="text-white/70 text-sm leading-relaxed">Accelerate your time-to-market with fast prototyping and continuous iteration</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-xl card-animate-3 group flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Results-Focused</h3>
            <p className="text-white/70 text-sm leading-relaxed">Prioritizing measurable outcomes and business value over feature bloat</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-xl card-animate-4 group flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Open & Empowering</h3>
            <p className="text-white/70 text-sm leading-relaxed">We empower you with complete understanding and full control of your solutions</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-40 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Seamless Integration with <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Your Tools</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Integrate with 50+ platforms and services you already use
              </p>
            </div>

            <div className="relative overflow-hidden mb-8 mt-25">
              <div className="flex animate-scroll-left">
                <div className="flex items-center gap-8 px-8">
                  {[
                    { name: 'Mailchimp', image: 'https://logo.clearbit.com/mailchimp.com' },
                    { name: 'Airtable', image: 'https://logo.clearbit.com/airtable.com' },
                    { name: 'Segment', image: 'https://cdn.simpleicons.org/segment/43E5A1' },
                    { name: 'Fivetran', image: 'https://logo.clearbit.com/fivetran.com' },
                    { name: 'Census', image: 'https://logo.clearbit.com/getcensus.com' },
                    { name: 'Snowflake', image: 'https://logo.clearbit.com/snowflake.com' },
                    { name: 'Databricks', image: 'https://logo.clearbit.com/databricks.com' },
                    { name: 'Asana', image: 'https://logo.clearbit.com/asana.com' },
                    { name: 'PostgreSQL', image: 'https://logo.clearbit.com/postgresql.org' },
                    { name: 'Pipedrive', image: 'https://cdn.simpleicons.org/pipedrive/0a0e27' },
                    { name: 'Google Calendar', image: 'https://cdn.simpleicons.org/googlecalendar/4285F4' },
                    { name: 'Outlook', image: 'https://logo.clearbit.com/outlook.com' },
                    { name: 'Slack', image: 'https://logo.clearbit.com/slack.com' },
                    { name: 'Zapier', image: 'https://logo.clearbit.com/zapier.com' },
                    { name: 'HubSpot', image: 'https://logo.clearbit.com/hubspot.com' },
                  ].map((tool, index) => (
                    <div
                      key={`tool-1-${index}`}
                      className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/100 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/105 transition-all duration-300 shadow-lg group p-3"
                    >
                      <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.fallback-text')) {
                            target.style.display = 'none';
                            const fallback = document.createElement('span');
                            fallback.className = 'fallback-text text-white text-xs font-medium text-center px-1';
                            fallback.textContent = tool.name;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 px-8">
                  {[
                    { name: 'Mailchimp', image: 'https://logo.clearbit.com/mailchimp.com' },
                    { name: 'Airtable', image: 'https://logo.clearbit.com/airtable.com' },
                    { name: 'Segment', image: 'https://cdn.simpleicons.org/segment/43E5A1' },
                    { name: 'Fivetran', image: 'https://logo.clearbit.com/fivetran.com' },
                    { name: 'Census', image: 'https://logo.clearbit.com/getcensus.com' },
                    { name: 'Snowflake', image: 'https://logo.clearbit.com/snowflake.com' },
                    { name: 'Databricks', image: 'https://logo.clearbit.com/databricks.com' },
                    { name: 'Asana', image: 'https://logo.clearbit.com/asana.com' },
                    { name: 'PostgreSQL', image: 'https://logo.clearbit.com/postgresql.org' },
                    { name: 'Pipedrive', image: 'https://cdn.simpleicons.org/pipedrive/0a0e27' },
                    { name: 'Google Calendar', image: 'https://cdn.simpleicons.org/googlecalendar/4285F4' },
                    { name: 'Outlook', image: 'https://logo.clearbit.com/outlook.com' },
                    { name: 'Slack', image: 'https://logo.clearbit.com/slack.com' },
                    { name: 'Zapier', image: 'https://logo.clearbit.com/zapier.com' },
                    { name: 'HubSpot', image: 'https://logo.clearbit.com/hubspot.com' },
                  ].map((tool, index) => (
                    <div
                      key={`tool-2-${index}`}
                      className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/100 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/105 transition-all duration-300 shadow-lg group p-3"
                    >
                      <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-white text-xs font-medium">${tool.name}</span>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right">
                <div className="flex items-center gap-8 px-8">
                  {[
                    { name: 'Notion', image: 'https://logo.clearbit.com/notion.so' },
                    { name: 'Trello', image: 'https://logo.clearbit.com/trello.com' },
                    { name: 'Jira', image: 'https://logo.clearbit.com/atlassian.com' },
                    { name: 'GitHub', image: 'https://logo.clearbit.com/github.com' },
                    { name: 'GitLab', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
                    { name: 'Bitbucket', image: 'https://logo.clearbit.com/bitbucket.org' },
                    { name: 'Docker', image: 'https://logo.clearbit.com/docker.com' },
                    { name: 'Kubernetes', image: 'https://logo.clearbit.com/kubernetes.io' },
                    { name: 'AWS', image: 'https://logo.clearbit.com/aws.amazon.com' },
                    { name: 'Azure', image: 'https://logo.clearbit.com/azure.microsoft.com' },
                    { name: 'GCP', image: 'https://logo.clearbit.com/cloud.google.com' },
                    { name: 'Stripe', image: 'https://logo.clearbit.com/stripe.com' },
                    { name: 'PayPal', image: 'https://logo.clearbit.com/paypal.com' },
                    { name: 'Shopify', image: 'https://logo.clearbit.com/shopify.com' },
                    { name: 'WooCommerce', image: 'https://logo.clearbit.com/woocommerce.com' },
                  ].map((tool, index) => (
                    <div
                      key={`tool-3-${index}`}
                      className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/100 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/105 transition-all duration-300 shadow-lg group p-3"
                    >
                      <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-white text-xs font-medium">${tool.name}</span>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 px-8">
                  {[
                    { name: 'Notion', image: 'https://logo.clearbit.com/notion.so' },
                    { name: 'Trello', image: 'https://logo.clearbit.com/trello.com' },
                    { name: 'Jira', image: 'https://logo.clearbit.com/atlassian.com' },
                    { name: 'GitHub', image: 'https://logo.clearbit.com/github.com' },
                    { name: 'GitLab', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
                    { name: 'Bitbucket', image: 'https://logo.clearbit.com/bitbucket.org' },
                    { name: 'Docker', image: 'https://logo.clearbit.com/docker.com' },
                    { name: 'Kubernetes', image: 'https://logo.clearbit.com/kubernetes.io' },
                    { name: 'AWS', image: 'https://logo.clearbit.com/aws.amazon.com' },
                    { name: 'Azure', image: 'https://logo.clearbit.com/azure.microsoft.com' },
                    { name: 'GCP', image: 'https://logo.clearbit.com/cloud.google.com' },
                    { name: 'Stripe', image: 'https://logo.clearbit.com/stripe.com' },
                    { name: 'PayPal', image: 'https://logo.clearbit.com/paypal.com' },
                    { name: 'Shopify', image: 'https://logo.clearbit.com/shopify.com' },
                    { name: 'WooCommerce', image: 'https://logo.clearbit.com/woocommerce.com' },
                  ].map((tool, index) => (
                    <div
                      key={`tool-4-${index}`}
                      className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/100 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/105 transition-all duration-300 shadow-lg group p-3"
                    >
                      <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-white text-xs font-medium">${tool.name}</span>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto mt-40 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Technologies <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">We Use</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks to build powerful solutions
              </p>
            </div>

            <div className="relative overflow-hidden mb-8 mt-25">
              <div className="flex animate-scroll-left">
                <div className="flex items-center gap-8 px-8">
                  {[
                    { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                    { name: 'Kotlin', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
                    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                    { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                    { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                    { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
                    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                  ].map((tech, index) => (
                    <div
                      key={`tech-1-${index}`}
                      className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/100 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/105 transition-all duration-300 shadow-lg group p-3"
                    >
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-white text-xs font-medium">${tech.name}</span>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 px-8">
                  {[
                    { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                    { name: 'Kotlin', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
                    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                    { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                    { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                    { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
                    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                  ].map((tech, index) => (
                    <div
                      key={`tech-2-${index}`}
                      className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/100 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/105 transition-all duration-300 shadow-lg group p-3"
                    >
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-white text-xs font-medium">${tech.name}</span>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right">
                <div className="flex items-center gap-8 px-8">
                  {[
                    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                    { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
                    { name: 'Swift', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
                    { name: 'Dart', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
                    { name: 'Redis', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
                    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                    { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                    { name: 'GraphQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                    { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                    { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                    { name: 'Azure', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                    { name: 'GCP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                  ].map((tech, index) => (
                    <div
                      key={`tech-3-${index}`}
                      className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/100 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/105 transition-all duration-300 shadow-lg group p-3"
                    >
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-white text-xs font-medium">${tech.name}</span>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 px-8">
                  {[
                    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                    { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
                    { name: 'Swift', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
                    { name: 'Dart', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
                    { name: 'Redis', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
                    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                    { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                    { name: 'GraphQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                    { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                    { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                    { name: 'Azure', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                    { name: 'GCP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                  ].map((tech, index) => (
                    <div
                      key={`tech-4-${index}`}
                      className="flex-shrink-0 w-20 h-20 rounded-xl bg-white/100 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/105 transition-all duration-300 shadow-lg group p-3"
                    >
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-white text-xs font-medium">${tech.name}</span>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto mt-20 mb-16 mt-30">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Our</span>{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                From concept to deployment in 5 clear steps
              </p>
            </div>
            <div className="relative mt-25 mt">
              <div className="absolute top-12 left-0 right-0 h-0.5 hidden md:block">
                <div className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-30"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                {[
                  { number: 1, title: 'Discovery', description: 'Understand your goals and pain points' },
                  { number: 2, title: 'Prototype', description: 'Build and validate a working MVP' },
                  { number: 3, title: 'Integrate', description: 'Connect to your existing systems' },
                  { number: 4, title: 'Scale', description: 'Optimize for growth and performance' },
                  { number: 5, title: 'Train', description: 'Empower your team to maintain it' }
                ].map((step) => (
                  <div key={step.number} className={`flex flex-col items-center text-center process-step process-step-${step.number}`}>
                    <div className="bg-white/100 backdrop-blur-md rounded-2xl p-6 border border-white/0 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-xl card-animate-1 group w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                      <span className="bg-gradient-to-r from-blue-700 via-purple-500 to-teal-400 bg-clip-text text-transparent text-3xl md:text-4xl font-bold relative z-10">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 mt-10">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed max-w-[180px]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto mt-20 mb-16 mt-30">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">A Note from the</span>{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Founder</span>
              </h2>
            </div>
            <div className="bg-gradient-to-r from-blue-50/10 via-purple-50/10 to-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl md:text-3xl font-bold">TT</span>
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-white/90 text-lg md:text-xl italic leading-relaxed mb-6">
                    "I started Tech Talks because I saw too many businesses struggling with manual processes that AI could easily solve. My mission is simple: build tools that work, teach you how they work, and make sure you get real results. Every project we take on is focused on creating measurable value for your business."
                  </blockquote>
                  <div className="flex flex-col -ml-2">
                    <span className="text-white font-bold text-lg">Tech Talks</span>
                    <span className="text-white/70 text-sm md:text-base">Founder & Lead Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto mt-20 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Learn with</span>{' '}
                <span className="text-red-600">Free Tutorials</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                Subscribe to our channel for AI automation tips, n8n workflows, and step-by-step guides
              </p>
              <a href="https://youtube.com/@supriyatechtalks?si=8AY4k55wLWLuSMzL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="text-white">Subscribe Now</span>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="relative overflow-hidden mt-25">
              <div className="flex animate-scroll-videos">
                <div className="flex items-center gap-6 px-4">
                  {[1, 2, 3].map((i) => (
                    <a key={i} href="https://youtube.com/@supriyatechtalks?si=8AY4k55wLWLuSMzL" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-64 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-xl group">
                      <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                        <img src="https://i.ytimg.com/vi/8LXjNCo8HB4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAZmmEqxgVo4rlskmQot2r2u3QU_g" alt="Video" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">Video</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-6 px-4">
                  {[1, 2, 3].map((i) => (
                    <a key={i} href="https://youtube.com/@supriyatechtalks?si=8AY4k55wLWLuSMzL" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-64 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-xl group">
                      <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                        <img src="https://i.ytimg.com/vi/8LXjNCo8HB4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAZmmEqxgVo4rlskmQot2r2u3QU_g" alt="Video" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">Video</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

