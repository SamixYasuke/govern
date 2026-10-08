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

export interface IOption {
  label: string;
  value: string;
}

interface ISelectorProps {
  btnName: string;
  dropdownSubtitle?: string;
  dropdownOptions?: IOption[];
  onSelect?: (value: string) => void;
}

const Selector = ({
  btnName = "",
  dropdownSubtitle = "",
  dropdownOptions = [],
  onSelect,
}: ISelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" className="cursor-pointer" />}
      >
        <HugeiconsIcon icon={Globe02Icon} size={14.333333015441895} />
        {btnName || "Open"}
        <HugeiconsIcon icon={ArrowDown01Icon} size={10.333351135253906} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            {dropdownSubtitle || "Select an option"}
          </DropdownMenuLabel>
          {dropdownOptions.length === 0 ? (
            <DropdownMenuItem></DropdownMenuItem>
          ) : (
            dropdownOptions.map((option, index) => (
              <DropdownMenuItem key={index}>{option.label}</DropdownMenuItem>
            ))
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Selector;
