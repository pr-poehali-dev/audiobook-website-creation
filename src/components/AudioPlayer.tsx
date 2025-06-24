import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface AudioPlayerProps {
  title: string;
  author: string;
  audioUrl: string;
  canDownload?: boolean;
}

const AudioPlayer = ({
  title,
  author,
  audioUrl,
  canDownload = false,
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const changePlaybackRate = () => {
    const rates = [0.75, 1, 1.25, 1.5, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];

    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
      <audio ref={audioRef} src={audioUrl} />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <h4 className="font-semibold text-sm">{title}</h4>
            <p className="text-xs text-muted-foreground">{author}</p>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Icon name="SkipBack" size={16} />
            </Button>

            <Button onClick={togglePlay} size="sm">
              <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
            </Button>

            <Button variant="ghost" size="sm">
              <Icon name="SkipForward" size={16} />
            </Button>
          </div>

          <div className="flex-1 flex items-center space-x-4">
            <span className="text-xs text-muted-foreground">
              {formatTime(currentTime)}
            </span>

            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={handleSeek}
              className="flex-1"
            />

            <span className="text-xs text-muted-foreground">
              {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={changePlaybackRate}>
              <span className="text-xs">{playbackRate}x</span>
            </Button>

            <Button variant="ghost" size="sm">
              <Icon name="Bookmark" size={16} />
            </Button>

            {canDownload && (
              <Button variant="ghost" size="sm">
                <Icon name="Download" size={16} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
