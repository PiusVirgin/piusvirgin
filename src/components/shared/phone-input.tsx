"use client";

import { Input } from "@/components/ui/input";
import type { Country } from "./country-picker/countries";
import ReactCountryFlag from "react-country-flag";

interface PhoneInputProps {
  country: Country | null;
  value: string;
  onChange: (value: string) => void;
}

export default function PhoneInput({
  country,
  value,
  onChange,
}: PhoneInputProps) {
  return (
    <div className="flex overflow-hidden rounded-md border">
      <div className="flex min-w-[120px] items-center gap-2 border-r bg-muted px-3">
        {country ? (
          <>
            <ReactCountryFlag
              svg
              countryCode={country.code}
              style={{
                width: "1.3rem",
                height: "1.3rem",
              }}
            />

            <span className="text-sm font-medium">
              {country.dialCode}
            </span>
          </>
        ) : (
          <span className="text-sm text-muted-foreground">
            Select country
          </span>
        )}
      </div>

      <Input
        className="border-0 shadow-none focus-visible:ring-0"
        placeholder="8123456789"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
