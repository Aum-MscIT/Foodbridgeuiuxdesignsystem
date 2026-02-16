import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { ArrowLeft, Send, Search, MoreVertical } from 'lucide-react';

export function Messages() {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Green Grocery',
      role: 'Donor',
      lastMessage: 'The vegetables are ready for pickup at 4 PM',
      time: '5 min ago',
      unread: 2,
      avatar: 'GG',
    },
    {
      id: 2,
      name: 'Hope Shelter',
      role: 'Recipient',
      lastMessage: 'Thank you for the donation!',
      time: '1 hour ago',
      unread: 0,
      avatar: 'HS',
    },
    {
      id: 3,
      name: 'John Smith',
      role: 'Volunteer',
      lastMessage: 'On my way to the pickup location',
      time: '2 hours ago',
      unread: 1,
      avatar: 'JS',
    },
    {
      id: 4,
      name: 'Sunrise Cafe',
      role: 'Donor',
      lastMessage: 'We have fresh sandwiches available',
      time: 'Yesterday',
      unread: 0,
      avatar: 'SC',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Green Grocery',
      isOwn: false,
      text: 'Hi! We have fresh vegetables ready for pickup today.',
      time: '10:30 AM',
    },
    {
      id: 2,
      sender: 'You',
      isOwn: true,
      text: 'Great! What time would work best for pickup?',
      time: '10:32 AM',
    },
    {
      id: 3,
      sender: 'Green Grocery',
      isOwn: false,
      text: 'Anytime between 3 PM and 6 PM would be perfect.',
      time: '10:35 AM',
    },
    {
      id: 4,
      sender: 'You',
      isOwn: true,
      text: 'Perfect! I\'ll arrange for pickup at 4 PM.',
      time: '10:36 AM',
    },
    {
      id: 5,
      sender: 'Green Grocery',
      isOwn: false,
      text: 'The vegetables are ready for pickup at 4 PM. Please use the back entrance.',
      time: '3:45 PM',
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message
      setMessage('');
    }
  };

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl">Messages</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-6 h-[calc(100vh-180px)]">
          {/* Conversations List */}
          <Card className="md:col-span-1">
            <CardContent className="p-0">
              <div className="p-4 border-b">
                <h2 className="text-xl mb-4">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search conversations..." className="pl-10" />
                </div>
              </div>

              <ScrollArea className="h-[calc(100vh-320px)]">
                <div className="divide-y">
                  {conversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      onClick={() => setSelectedChat(conversation.id)}
                      className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors ${
                        selectedChat === conversation.id ? 'bg-green-50' : ''
                      }`}
                    >
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white">
                          {conversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm truncate">{conversation.name}</h4>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{conversation.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-600 truncate">{conversation.lastMessage}</p>
                          {conversation.unread > 0 && (
                            <Badge className="ml-2 flex-shrink-0" style={{ backgroundColor: 'var(--foodbridge-green)', color: 'white' }}>
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {conversation.role}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="md:col-span-2">
            <CardContent className="p-0 flex flex-col h-full">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white">
                      {selectedConversation?.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3>{selectedConversation?.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {selectedConversation?.role}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${msg.isOwn ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`rounded-2xl px-4 py-2 ${
                            msg.isOwn
                              ? 'rounded-br-none text-white'
                              : 'rounded-bl-none bg-gray-100'
                          }`}
                          style={msg.isOwn ? { backgroundColor: 'var(--foodbridge-green)' } : {}}
                        >
                          <p className="text-sm">{msg.text}</p>
                        </div>
                        <p className={`text-xs text-gray-500 mt-1 ${msg.isOwn ? 'text-right' : 'text-left'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    style={{ backgroundColor: 'var(--foodbridge-green)', color: 'white' }}
                    onClick={handleSendMessage}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
