import { useState, useEffect, useRef } from 'react';

const RainMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with multiple fallback sources
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    audioRef.current.preload = 'auto';

    // Try primary source - rain sound
    audioRef.current.src = 'https://assets.mixkit.co/active_storage/sfx/2390/2390-preview.mp3';

    // Add event listeners
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsLoading(false);
      setError(null);
    });

    audioRef.current.addEventListener('error', () => {
      console.error('Error loading audio');
      setError('Failed to load audio');
      setIsLoading(false);
    });

    // Attempt to autoplay when component mounts
    const attemptAutoplay = async () => {
      if (audioRef.current) {
        try {
          setIsLoading(true);
          await audioRef.current.play();
          setIsPlaying(true);
          setIsLoading(false);
        } catch {
          // Autoplay was prevented by browser
          console.log('Autoplay prevented. User interaction required.');
          setIsLoading(false);
          // Don't set error for autoplay prevention, just wait for user click
        }
      }
    };

    // Small delay to ensure audio is ready
    const timer = setTimeout(attemptAutoplay, 500);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        setError(null);

        // Ensure audio is loaded
        if (audioRef.current.readyState < 2) {
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Timeout')), 5000);
            audioRef.current!.addEventListener(
              'canplay',
              () => {
                clearTimeout(timeout);
                resolve(true);
              },
              { once: true }
            );
          });
        }

        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Error playing audio:', err);
      setError('Failed to play audio. Please try again.');
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Error Message */}
      {error && (
        <div className="bg-red-500/20 backdrop-blur-md rounded-lg p-3 shadow-lg border border-red-500/30 animate-fade-in max-w-xs">
          <p className="text-white text-xs">{error}</p>
        </div>
      )}

      {/* Volume Control - Shows when playing */}
      {isPlaying && (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/20 animate-fade-in">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`,
              }}
            />
            <span className="text-white text-xs font-medium min-w-[2rem] text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      )}

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        disabled={isLoading}
        className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-full p-4 shadow-lg border border-white/20 group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={isPlaying ? 'Pause rain music' : 'Play rain music'}
        title={isPlaying ? 'Pause rain music' : 'Play rain music'}>
        {isLoading ? (
          <svg className="w-6 h-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : isPlaying ? (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default RainMusic;
