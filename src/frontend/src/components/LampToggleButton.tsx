import { Button } from '@/components/ui/button';
import { Power } from 'lucide-react';

interface LampToggleButtonProps {
  isOn: boolean;
  onToggle: () => void;
}

export default function LampToggleButton({ isOn, onToggle }: LampToggleButtonProps) {
  return (
    <Button
      onClick={onToggle}
      aria-pressed={isOn}
      size="lg"
      className={`
        min-w-[180px] h-14 text-lg font-semibold
        transition-all duration-300 ease-in-out
        ${
          isOn
            ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 text-white shadow-lg shadow-amber-500/50'
            : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white shadow-md'
        }
      `}
    >
      <Power className="mr-2 h-5 w-5" />
      {isOn ? 'Switch Off' : 'Switch On'}
    </Button>
  );
}
