'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Label } from '@/components/ui/label';
import { IconSwitch } from '@/components/ui/icon-switch';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2">
      <IconSwitch
        id="theme-mode"
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        icon={
          theme === 'dark' ? (
            <Moon className="h-[14px] w-[14px] text-primary" />
          ) : (
            <Sun className="h-[14px] w-[14px] text-primary" />
          )
        }
      />
      <Label htmlFor="theme-mode" className="sr-only">
        Toggle theme
      </Label>
    </div>
  );
};

export default ModeToggle;
