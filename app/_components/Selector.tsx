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
  ariaLabel?: string;
  onSelect?: (value: string) => void;
}

const Selector = ({
  btnName = "",
  dropdownSubtitle = "",
  dropdownOptions = [],
  value,
  pending = false,
  ariaLabel,
  onSelect,
}: ISelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={ariaLabel ?? dropdownSubtitle ?? `Language: ${btnName}`}
        aria-haspopup="menu"
        render={
          <Button
            variant="ghost"
            type="button"
            className={cn(
              "cursor-pointer transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#043D6E]",
              pending && "pointer-events-none opacity-60",
            )}
          />
        }
      >
        <HugeiconsIcon icon={Globe02Icon} size={14.33} aria-hidden="true" />
        <span aria-hidden={pending} className={cn(pending && "animate-pulse")}>{btnName || "Open"}</span>
        {pending && <span className="sr-only">Loading</span>}
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={10.33}
          aria-hidden="true"
          className={cn("transition-transform duration-200", pending && "animate-spin")}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-44" role="menu" aria-label={dropdownSubtitle}>
        <DropdownMenuGroup>
          <DropdownMenuLabel aria-hidden="true">
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
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => onSelect?.(option.value)}
                  className={cn(
                    "cursor-pointer justify-between gap-3 focus-visible:outline-2 focus-visible:outline-[#043D6E]",
                    selected && "font-semibold",
                  )}
                >
                  <span>{option.label}</span>
                  {selected && <CheckIcon aria-hidden="true" className="size-4 shrink-0" />}
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
