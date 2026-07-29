"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { countries, Country} from "./countries";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";


interface CountryPickerProps {
  value: Country | null;
  onChange: (country: Country) => void;
}

export default function CountryPicker({
  value,
  onChange,
}: CountryPickerProps) {
  const [open, setOpen] = React.useState(false);



  const selectedCountry = value;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedCountry ? (
            <div className="flex items-center gap-3">
              <ReactCountryFlag
                svg
                countryCode={selectedCountry.code}
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />

              <span>{selectedCountry.name}</span>

              <span className="text-muted-foreground">
                {selectedCountry.dialCode}
              </span>
            </div>
          ) : (
            "Select Country"
          )}

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[340px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search country..." />

          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>

            <CommandGroup>
              {countries.map((country) => (
               <CommandItem
  key={country.code}
  value={country.name}
  onSelect={(currentValue) => {
    const selected = countries.find(
      (c) => c.name.toLowerCase() === currentValue.toLowerCase()
    );

    if (!selected) return;

    onChange(selected);
    setOpen(false);
  }}
>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ReactCountryFlag
                        svg
                        countryCode={country.code}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      />

                      <span>{country.name}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">
                        {country.dialCode}
                      </span>

                      <Check
                        className={cn(
                          "h-4 w-4",
                          selectedCountry?.code === country.code
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
