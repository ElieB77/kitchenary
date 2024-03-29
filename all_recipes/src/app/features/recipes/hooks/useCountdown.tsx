import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export const useCountdown = (initialMinutes: number) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [remainingSeconds, setRemainingSeconds] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isCountdownOpen, setIsCountdownOpen] = useState<boolean>(false);
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const toggleCountdown = () => {
    setIsCountdownOpen(!isCountdownOpen);
  };

  const pauseAndPlayCountdown = () => setIsRunning(!isRunning);

  const resetCountdown = () => {
    setRemainingSeconds(initialMinutes * 60);
    setIsRunning(true);
  };

  const closeCountdown = () => {
    setRemainingSeconds(initialMinutes * 60);
    setIsRunning(false);
    setIsCountdownOpen(false);
    setCountdown({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  useEffect(() => {
    let interval: any = null;

    const updateCountdown = () => {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      setCountdown({ hours, minutes, seconds });

      if (remainingSeconds === 0) {
        clearInterval(interval);
      } else {
        setRemainingSeconds(remainingSeconds - 1);
      }
    };

    if (isRunning) {
      interval = setInterval(updateCountdown, 1000);
    }

    return () => clearInterval(interval);
  }, [
    initialMinutes,
    countdown,
    isRunning,
    resetCountdown,
    closeCountdown,
    remainingSeconds,
  ]);

  useEffect(() => {
    setRemainingSeconds(initialMinutes * 60);
  }, [searchParams, pathname, initialMinutes]);

  return {
    countdown,
    toggleCountdown,
    pauseAndPlayCountdown,
    resetCountdown,
    closeCountdown,
    isRunning,
    isCountdownOpen,
  };
};
