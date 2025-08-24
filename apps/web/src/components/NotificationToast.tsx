'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, X, Info } from 'lucide-react';

interface NotificationToastProps {
  message: string;
  type?: 'success' | 'warning' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
  visible?: boolean;
}

export default function NotificationToast({
  message,
  type = 'info',
  duration = 4000,
  onClose,
  visible = true
}: NotificationToastProps) {
  const [isVisible, setIsVisible] = useState(visible);
  const [isExiting, setIsExiting] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'error': return <X className="w-5 h-5 text-red-500" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'success': 
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning': 
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error': 
        return 'bg-red-50 border-red-200 text-red-800';
      default: 
        return 'bg-[rgba(184,134,11,0.1)] border-[rgba(184,134,11,0.3)] text-[#1C1C1E]';
    }
  };

  useEffect(() => {
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed top-24 right-6 z-50
        transform transition-all duration-300 ease-out
        ${isExiting 
          ? 'translate-x-full opacity-0 scale-95' 
          : 'translate-x-0 opacity-100 scale-100'
        }
        ${visible ? 'animate-slideInRight' : ''}
      `}
    >
      <div className={`
        flex items-center space-x-3 px-4 py-3 rounded-lg border backdrop-blur-[15px] shadow-lg
        max-w-sm min-w-[300px]
        ${getColors()}
      `}>
        <div className="mr-3">{getIcon()}</div>
        <div className="flex-1 text-sm font-medium">{message}</div>
        <button
          onClick={handleClose}
          className="text-lg hover:scale-110 transition-transform duration-200 opacity-60 hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// Keyframe animation for slide in
const styles = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.3s ease-out;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
