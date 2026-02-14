import LampIllustration from './LampIllustration';
import LampToggleButton from './LampToggleButton';

interface LampSceneProps {
  isOn: boolean;
  onToggle: () => void;
}

export default function LampScene({ isOn, onToggle }: LampSceneProps) {
  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-2xl">
      <div className="relative w-full flex items-center justify-center">
        <LampIllustration isOn={isOn} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <LampToggleButton isOn={isOn} onToggle={onToggle} />
        <p className="text-lg font-medium text-foreground/80">
          Lamp is <span className="font-bold text-amber-600 dark:text-amber-400">{isOn ? 'On' : 'Off'}</span>
        </p>
      </div>
    </div>
  );
}
