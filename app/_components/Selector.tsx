"use client";

import { CheckIcon } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Globe02Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface IOption {
  label: string;
  value: string;
}

interface ISelectorProps {
  btnName: string;
  dropdownSubtitle?: string;
  dropdownOptions?: IOption[];
  value?: string;
  pending?: boolean;
  onSelect?: (value: string) => void;
}

const Selector = ({
  btnName = "",
  dropdownSubtitle = "",
  dropdownOptions = [],
  value,
  pending = false,
  onSelect,
}: ISelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className={cn(
              "cursor-pointer transition-opacity",
              pending && "pointer-events-none opacity-60",
            )}
          />
        }
      >
        <HugeiconsIcon icon={Globe02Icon} size={14.33} />
        <span className={cn(pending && "animate-pulse")}>{btnName || "Open"}</span>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={10.33}
          className={cn("transition-transform duration-200", pending && "animate-spin")}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-44">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            {dropdownSubtitle || "Select an option"}
          </DropdownMenuLabel>
          {dropdownOptions.length === 0 ? (
            <DropdownMenuItem disabled>No options</DropdownMenuItem>
          ) : (
            dropdownOptions.map((option) => {
              const selected = value === option.value;
              return (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => onSelect?.(option.value)}
                  className={cn(
                    "cursor-pointer justify-between gap-3",
                    selected && "font-semibold",
                  )}
                >
                  <span>{option.label}</span>
                  {selected && <CheckIcon className="size-4 shrink-0" />}
                </DropdownMenuItem>
              );
            })
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Selector;
